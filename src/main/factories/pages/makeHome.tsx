import React from "react";
import { Home } from "../../../presentation/pages";
import { makeDiscoverMovies } from "../useCases/makeDiscoverMoviesFactory";
import { makeListFavoriteMovies } from "../useCases/makeListFavoriteMoviesFactory";
import { makeSearchMovie } from "../useCases/makeSearchMovieFactory";

const MakeHome: React.FC = () => {
  return (
    <Home
      searchMovie={makeSearchMovie()}
      listFavoriteMovies={makeListFavoriteMovies()}
      discoverMovies={makeDiscoverMovies()}
    />
  );
};

export default MakeHome;
