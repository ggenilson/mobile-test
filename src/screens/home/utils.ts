import Api from '../../services/api';
import {
  LeaguesSeasonsType,
  LeaguesType,
  LeagueType,
  OrderType,
} from './types';

export const getStandings = async (
  league: string,
  season: string
): Promise<LeagueType> => {
  try {
    const res = await Api.get('/standings');

    if (res) {
      const { response } = res?.data;
      const { league } = response[0];

      return league;
    }

    return initialState;
  } catch (e) {
    console.log('Error: ', e);
    return initialState;
  }
};

export const getLeaguesSeasons = async (): Promise<LeaguesSeasonsType> => {
  try {
    const res = await Api.get('/leagues/seasons');

    if (res) {
      const { response } = res?.data;

      return response;
    }

    return [];
  } catch (e) {
    console.log('Error: ', e);
    return [];
  }
};

export const getLeagues = async (): Promise<LeaguesType[]> => {
  try {
    const res = await Api.get('/leagues');

    if (res) {
      const { response } = res?.data;

      return response;
    }

    return [];
  } catch (e) {
    console.log('Error: ', e);
    return [];
  }
};

export const orderLeaguesStandings = (
  leagueStanding: LeagueType,
  type: OrderType
) => {
  const { standings } = leagueStanding;

  standings[0].sort((val, valCompare) => {
    const {
      all: { lose, win, draw },
      points,
      rank,
    } = val;

    const {
      all: { lose: loseCompare, win: winCompare, draw: drawCompare },
      points: pointsCompare,
      rank: rankCompare,
    } = valCompare;

    switch (type) {
      case OrderType.POINTS:
        return pointsCompare - points;
      case OrderType.RANK:
        return rankCompare - rank;
      case OrderType.DRAW:
        return drawCompare - draw;
      case OrderType.LOSE:
        return loseCompare - lose;
      case OrderType.WIN:
        return winCompare - win;
      default:
        return 0;
    }
  });

  return leagueStanding;
};

export const initialState: LeagueType = {
  id: 0,
  name: '',
  country: '',
  flag: '',
  logo: '',
  season: 0,
  standings: [
    [
      {
        team: {
          id: 0,
          logo: '',
          name: '',
        },
        rank: 0,
        group: '',
        points: 0,
        all: {
          lose: 0,
          played: 0,
          win: 0,
          draw: 0,
        },
      },
    ],
  ],
};
