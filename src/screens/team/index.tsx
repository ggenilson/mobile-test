import React, { FC, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { StandingsStyle } from '../../components/standings/styles';
import { RouteStackParamList } from '../../@types/global';
import Header from '../../components/header';
import { TeamContext } from '../../contexts';
import { TeamStyle } from './styles';

const Team: FC<RouteStackParamList<'Team'>> = ({ navigation }) => {
  const { teamInfo } = useContext(TeamContext);

  const {
    team: { name, country, founded, logo },
    venue: { name: venueName, address, city, capacity },
  } = teamInfo;

  return (
    <View>
      <Header />

      <View style={StandingsStyle.standings}>
        <View style={[StandingsStyle.item, StandingsStyle.itemHeader]}>
          <Image style={StandingsStyle.imgTeam} source={{ uri: logo }} />
          <Text style={StandingsStyle.itemHeaderText}>{name}</Text>
        </View>

        <View style={StandingsStyle.secondItem}>
          <View style={StandingsStyle.item}>
            <Text style={StandingsStyle.other}>Country: {country}</Text>
            <Text style={StandingsStyle.other}>Founded: {founded}</Text>
          </View>

          <View style={StandingsStyle.item}>
            <Text style={StandingsStyle.win}>Venue Name: {venueName}</Text>
            <Text style={StandingsStyle.lose}>Adress: {address}</Text>
            <Text style={StandingsStyle.other}>City: {city}</Text>
            <Text style={StandingsStyle.rank}>Capacity: {capacity}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={TeamStyle.btn}>
          <Text style={TeamStyle.text}>Back home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Team;
