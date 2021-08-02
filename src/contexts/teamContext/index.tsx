import React, { FC, useState, createContext } from 'react';
import { propContextDefaultValues } from './types';
import { TeamInformationType } from './types';

export const initialStateTeamInformation = {
  team: { name: '', country: '', founded: 0, logo: '' },
  venue: { name: '', address: '', city: '', capacity: 0 },
};

const contexDefaultValues: propContextDefaultValues = {
  teamInfo: initialStateTeamInformation,
  setTeamInfo: () => {},
};

export const TeamContext =
  createContext<propContextDefaultValues>(contexDefaultValues);

const TeamProvider: FC = ({ children }) => {
  const [teamInfo, setT] = useState<TeamInformationType>(
    contexDefaultValues.teamInfo
  );
  const setTeamInfo = (value: TeamInformationType) => setT(value);

  return (
    <TeamContext.Provider
      value={{
        teamInfo,
        setTeamInfo,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
