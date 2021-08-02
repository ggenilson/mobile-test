import Api from '../../services/api';

import { initialStateTeamInformation } from '../../contexts/team';
import { orderLeaguesStandings } from '../../screens/home/utils';
import { LeagueType, OrderType } from '../../screens/home/types';
import { TeamInformationType } from '../../contexts/team/types';

export const getTeamInformation = async (
  team: string
): Promise<TeamInformationType> => {
  try {
    const res = await Api.get('/teams');

    if (res) {
      const { response } = res?.data;

      return response[0];
    }

    return initialStateTeamInformation;
  } catch (e) {
    console.log('Error: ', e);
    return initialStateTeamInformation;
  }
};

export const filterTypes = [
  {
    value: OrderType.WIN,
    label: 'Win',
  },
  {
    value: OrderType.LOSE,
    label: 'Lose',
  },
  {
    value: OrderType.DRAW,
    label: 'Draw',
  },
  {
    value: OrderType.POINTS,
    label: 'Points',
  },
  {
    value: OrderType.RANK,
    label: 'Rank',
  },
];

export const handleValueChange = (leagueStanding: LeagueType, type: string) => {
  return orderLeaguesStandings(leagueStanding, <OrderType>type);
};

export const handleChangeText = (
  leagueStanding: LeagueType,
  search: string
) => {
  const { standings } = leagueStanding;

  standings[0] = standings[0].filter(({ team }) => team.name.indexOf(search));

  return leagueStanding;
};
