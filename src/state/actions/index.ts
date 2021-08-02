import { LeagueType } from '../../screens/home/types';
import { ActionType } from '../actionTypes';

interface SaveStandingsAction {
  type: ActionType.SAVE_STANDINGS;
  payload: LeagueType;
}

export type ActionProps = SaveStandingsAction;
