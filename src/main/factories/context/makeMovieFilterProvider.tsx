import React from "react";
import MovieFilterContext, {
  MovieFilterProvider,
} from "../../../presentation/context/movieFilterContext";
import { makeLoadGenres } from "../useCases/makeLoadGenresFactory";

const MakeMovieFilterContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <MovieFilterProvider loadGenres={makeLoadGenres()}>
        {children}
      </MovieFilterProvider>
    </>
  );
};

export default MakeMovieFilterContext;
