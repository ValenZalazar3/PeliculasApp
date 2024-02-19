import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetail {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
  const [state, setState] = useState<MovieDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const movieDetailPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailResponse, castResponse] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  return {
    ...state,
  };
};
