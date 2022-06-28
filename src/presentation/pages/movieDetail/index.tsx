import React from "react";
import ListMoviesBestRated from "../../../domain/useCases/ListMoviesBestRated";

import LoadSimilarMovies from "../../../domain/useCases/LoadSimilarMovies";

type MovieDetailsProp = {
  loadSimilarMovies: LoadSimilarMovies;
  listMoviesBestRated: ListMoviesBestRated;
};

const MovieDetail: React.FC<MovieDetailsProp> = () => {
  // const handleLoad = async () => {
  //   listMoviesBestRated.handle();
  // };
  return <div>MovieDetail</div>;
};

export default MovieDetail;
