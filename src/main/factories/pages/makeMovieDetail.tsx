import React from "react";
import { MovieDetail } from "../../../presentation/pages";
import { makeListMoviesBestRated } from "../useCases/makeListMoviesBestRatedFactory";
import { makeLoadSimilarMovies } from "../useCases/makeLoadSimilarMoviesFactory";

const MakeMovieDetail: React.FC = () => {
  return (
    <MovieDetail
      loadSimilarMovies={makeLoadSimilarMovies()}
      listMoviesBestRated={makeListMoviesBestRated()}
    />
  );
};

export default MakeMovieDetail;
