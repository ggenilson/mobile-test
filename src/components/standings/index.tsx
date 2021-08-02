import React, { FC, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { ApplicationState, saveStandings } from '../../state';
import { RouteStackParamList } from '../../@types/global';
import { filterTypes, handleValueChange, getTeamInformation } from './utils';
import { HomeStyle } from '../../screens/home/styles';
import { LeagueType } from '../../screens/home/types';
import { StandingsStyle } from './styles';
import SelectInput from '../selectInput';
import { useEffect } from 'react';
import { TeamContext } from '../../contexts';
import { useState } from 'react';
import { TeamInformationType } from '../../contexts/team/types';
import { initialStateTeamInformation } from '../../contexts/Team';

const RenderLeagueStanding: FC<RouteStackParamList<'Home'>> = ({
  navigation,
}) => {
  const leagueStandings: LeagueType = useSelector(
    (state: ApplicationState) => state.league
  );
  // const [teamInformation, setTeamInformation] = useState<TeamInformationType>(
  //   initialStateTeamInformation
  // );
  const { flag, country, standings: std } = leagueStandings;
  const { setTeamInfo, teamInfo } = useContext(TeamContext);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const teamInformation: TeamInformationType = await getTeamInformation('');
      console.log('Tema Information: ', teamInformation);
      setTeamInfo(teamInformation);
    })();
  }, []);

  useEffect(() => {
    console.log('Foi alterada: ', teamInfo);
  }, [teamInfo]);

  return country ? (
    <View>
      <View>
        <View style={HomeStyle.searchContainer}>
          <SelectInput
            style={HomeStyle.searchItem}
            placeholder="Filter by"
            data={filterTypes}
            onValueChange={itemValue => {
              const standingsFiltered = handleValueChange(
                leagueStandings,
                itemValue.toString()
              );

              dispatch(saveStandings({ ...standingsFiltered }));
            }}
          />
        </View>
      </View>
      <View style={StandingsStyle.headerCountry}>
        <Image style={StandingsStyle.imgTeam} source={{ uri: flag }} />
        <Text style={StandingsStyle.headerCountryText}>{country}</Text>
      </View>

      {std[0].map(
        (
          {
            points,
            rank,
            team: { name, logo },
            all: { win, lose, draw, played },
          },
          index
        ) => (
          <TouchableOpacity
            key={`league-standings-${index}`}
            onPress={() => {
              // setTeam({ ...teamInformation });
              navigation.navigate('Team');
            }}
          >
            <View style={StandingsStyle.standings}>
              <View style={[StandingsStyle.item, StandingsStyle.itemHeader]}>
                <Image style={StandingsStyle.imgTeam} source={{ uri: logo }} />
                <Text style={StandingsStyle.itemHeaderText}>{name}</Text>
              </View>

              <View style={StandingsStyle.secondItem}>
                <View style={StandingsStyle.item}>
                  <Text style={StandingsStyle.other}>Played: {played}</Text>
                  <Text style={StandingsStyle.other}>Points: {points}</Text>
                  <Text style={StandingsStyle.rank}>Rank: {rank}</Text>
                </View>

                <View style={StandingsStyle.item}>
                  <Text style={StandingsStyle.win}>Win: {win}</Text>
                  <Text style={StandingsStyle.lose}>Lose: {lose}</Text>
                  <Text style={StandingsStyle.other}>Draw: {draw}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )
      )}
    </View>
  ) : (
    <Text style={StandingsStyle.requestError}>
      Opaah! Não conseguimos carregar os dados!
    </Text>
  );
};

export default RenderLeagueStanding;
