import { StyleSheet } from 'react-native';

export const StandingsStyle = StyleSheet.create({
  imgTeam: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  standings: {
    flexDirection: 'column',
    width: '100%',
    boxShadow: '0 0 4px black',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: 'rgb(255, 255, 255)',
    cursor: 'pointer',
  },
  item: {
    marginRight: '20px',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemHeaderText: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: '500',
  },
  secondItem: {
    flexDirection: 'row',
    margin: 'auto',
  },
  win: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  lose: {
    color: 'rgb(184, 48, 48)',
    fontWeight: 'bold',
    fontSize: 15,
  },
  rank: {
    color: 'orange',
    fontWeight: 'bold',
  },
  other: {
    fontWeight: '500',
  },
  requestError: {
    fontSize: 17,
    color: 'rgb(184, 48, 48)',
    fontWeight: '500',
    marginTop: 20,
    paddingLeft: 20,
  },
  headerCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  headerCountryText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
});
