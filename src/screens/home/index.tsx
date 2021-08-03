import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView ,View} from 'react-native';

import RenderLeagueStanding from '../../components/standings';
import Header from '../../components/header';

import { getLeaguesSeasons, getStandings, getLeagues } from './utils';
import { DataType } from '../../components/selectInput/types';
import { RouteStackParamList } from '../../@types/global';
import SelectInput from '../../components/selectInput';
import { LeagueType } from './types';
import { HomeStyle } from './styles';

import { saveStandings } from '../../state';


interface IValuesSearch {
  league: string;
  season: string;
}

const Home: FC<RouteStackParamList<'Home'>> = ({ navigation }) => {
  const [leagueSeasons, setLeagueSeason] = useState<DataType[]>([]);
  const [valuesSearch, setValuesSearch] = useState<IValuesSearch>({
    league: '',
    season: '',
  });
  const [controlRender, setControlRender] = useState(false);
  const [leagues, setLeagues] = useState<DataType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getLeaguesSeasons().then(res => {
      const seasons: DataType[] = res.map(val => ({
        label: val.toString() || '',
        value: val.toString() || '',
      }));

      setLeagueSeason(seasons);
    });

    getLeagues().then(res => {
      const leagues: DataType[] = res.map(({ league }) => ({
        label: league?.name,
        value: league?.id,
      }));

      setLeagues(leagues);
    });
  }, []);

  useEffect(() => {
    const { league, season } = valuesSearch;

    if (league && season) {
      (async () => {
        const leagueStandings: LeagueType = await getStandings(league, season);
        dispatch(saveStandings(leagueStandings));
      })();

      setControlRender(true);

      return;
    }

    setControlRender(false);
  }, [valuesSearch]);

  return (
    <ScrollView style={HomeStyle.container}>
      <Header />

      <View style={HomeStyle.searchContainer}>
        <SelectInput
          id="liga"
          name="liga"
          selectedValue="Genilson"
          style={HomeStyle.searchItem}
          placeholder="Liga"
          data={leagues}
          onValueChange={itemValue =>
            setValuesSearch({ ...valuesSearch, league: itemValue.toString() })
          }
        />

        <SelectInput
          id="season"
          name="season"
          style={HomeStyle.searchItem}
          placeholder="Season"
          selectedValue="Genilson"
          data={leagueSeasons}
          onValueChange={itemValue =>
            setValuesSearch({ ...valuesSearch, season: itemValue.toString() })
          }
        />
      </View>

      {controlRender && <RenderLeagueStanding navigation={navigation} />}
    </ScrollView>
  );
};

export default Home;
