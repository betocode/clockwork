import React from "react";
import { MovieModel, MovieType } from "../../../domain/models";
import MovieCard from "../MovieCard";

type MovieListProps = {
  movies: MovieModel[];
  title: string;
  //   onClick: (id: number) => void;
  //   addFavorite: (id: number) => void;
};

const Index: React.FC<MovieListProps> = ({ movies, title }: MovieListProps) => {
  if (movies.length) return <></>;

  return (
    <div>
      <h3>{title}</h3>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default Index;
