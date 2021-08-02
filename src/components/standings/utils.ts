import Api from '../../services/api';

import { initialStateTeamInformation } from '../../contexts/teamContext';
import { TeamInformationType } from '../../contexts/teamContext/types';
import { orderLeaguesStandings } from '../../screens/home/utils';
import { LeagueType } from '../../screens/home/types';
import { OrderType } from '../../@types/global';

export const getTeamInformation = async (
  team: string
): Promise<TeamInformationType> => {
  try {
    const res = await Api.get(`/teams?id=${team}`);

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
  let { standings } = leagueStanding;

  standings = standings.filter(({ team }) => team.name.indexOf(search));

  return leagueStanding;
};
