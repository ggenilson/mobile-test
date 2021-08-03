import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(29, 218, 29)',
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  imgHeader: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginLeft: 10,
  },
  titleHeader: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '500',
    marginLeft: 10,
  },
  imgTeam: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  searchItem: {
    width: '45%',
    marginLeft: 8,
    height: 35,
  },
  standings: {
    flexDirection: 'column',
    width: '100%',
    // boxShadow: '0 0 4px black',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    // cursor: 'pointer',
  },
  item: {
    marginRight: 20,
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
