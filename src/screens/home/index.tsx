import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';

import RenderLeagueStanding from '../../components/standings';
import Header from '../../components/header';

import { getLeaguesSeasons, getStandings, getLeagues } from './utils';
import { DataType } from '../../components/selectInput/types';
import { RouteStackParamList } from '../../@types/global';
import SelectInput from '../../components/selectInput';
import { LeagueType } from './types';
import { HomeStyle } from './styles';

import { saveStandings } from '../../state';
import { Picker } from '@react-native-community/picker';

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
        label: val || '',
        value: val || '',
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
    <View style={HomeStyle.container}>
      <Header />

      <View style={HomeStyle.searchContainer}>
        <SelectInput
          style={HomeStyle.searchItem}
          placeholder="Liga"
          data={leagues}
          onValueChange={itemValue =>
            setValuesSearch({ ...valuesSearch, league: itemValue.toString() })
          }
        />

        <SelectInput
          style={HomeStyle.searchItem}
          placeholder="Season"
          data={leagueSeasons}
          onValueChange={itemValue =>
            setValuesSearch({ ...valuesSearch, season: itemValue.toString() })
          }
        />
      </View>

      {controlRender && <RenderLeagueStanding navigation={navigation} />}
    </View>
  );
};

export default Home;
