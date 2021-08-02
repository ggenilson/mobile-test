import React, { FC, useState, createContext } from 'react';
import { ContextDefaultValuesType } from './types';
import { TeamInformationType } from './types';

export const initialStateTeamInformation = {
  team: { name: '', country: '', founded: 0, logo: '' },
  venue: { name: '', address: '', city: '', capacity: 0 },
};

const contextDefaultValues: ContextDefaultValuesType = {
  teamInfo: initialStateTeamInformation,
  setTeamInfo: () => {},
};

export const TeamContext =
  createContext<ContextDefaultValuesType>(contextDefaultValues);

const TeamProvider: FC = ({ children }) => {
  const [teamInfo, setTeam] = useState<TeamInformationType>(
    contextDefaultValues.teamInfo
  );
  const setTeamInfo = (value: TeamInformationType) => setTeam(value);

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
