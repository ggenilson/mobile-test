import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { HomeStyle } from '../../screens/home/styles';

const Header: FC = () => (
  <View style={HomeStyle.header}>
    <Image
      style={HomeStyle.imgHeader}
      source={require('../../../assets/defaultImages/bol.png')}
    />
    <Text style={HomeStyle.titleHeader}>Go Football</Text>
  </View>
);

export default Header;
