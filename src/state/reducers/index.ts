import { combineReducers } from 'redux';
import leagueReducer from './leagueReducer';

export const reducers = combineReducers({
  league: leagueReducer,
});

export type ApplicationState = ReturnType<typeof reducers>;
