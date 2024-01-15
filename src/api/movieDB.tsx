import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'eeca4b7dbd0c7bf4c3483702db599fe0',
    language: 'es-ES',
  },
});

export default movieDB;
