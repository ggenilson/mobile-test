import { Dispatch } from 'redux';

import { LeagueType } from '../../screens/home/types';
import { ActionType } from '../actionTypes';
import { ActionProps } from '../actions';

export const saveStandings = (value: LeagueType) => {
  return (dispatch: Dispatch<ActionProps>) => {
    dispatch({
      type: ActionType.SAVE_STANDINGS,
      payload: value,
    });
  };
};
