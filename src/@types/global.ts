import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RouteParamList = {
  Home: undefined;
  Team: undefined;
};

export type RouteStackParamList<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T>;
  route?: RouteProp<RouteParamList, T>;
};

export enum OrderType {
  POINTS = 'points',
  RANK = 'rank',
  DRAW = 'draw',
  LOSE = 'lose',
  WIN = 'win',
}
