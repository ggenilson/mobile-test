import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'd28d9ff801719e17f5a092c325a3f25e',
  },
});

export default api;
