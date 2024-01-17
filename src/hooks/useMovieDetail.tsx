import {useState} from 'react';

interface MovieDetail {
  isLoading: boolean;
  // movieFull: ??,
  cast: any[];
}

export const useMovieDetail = () => {
  const [first, setfirst] = useState<MovieDetail>(second);
};
