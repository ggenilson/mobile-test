import { initialState as INITIAL_STATE } from '../../screens/home/utils';
import { LeagueType } from '../../screens/home/types';
import { ActionType } from '../actionTypes';
import { ActionProps } from '../actions';

const initialState: LeagueType = INITIAL_STATE;

const reducer = (state: LeagueType = initialState, action: ActionProps) => {
  switch (action.type) {
    case ActionType.SAVE_STANDINGS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
