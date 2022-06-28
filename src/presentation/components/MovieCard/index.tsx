import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieModel, MovieType } from "../../../domain/models";

type MovieCardProps = {
  movie: MovieModel;
};
const Index: React.FC<MovieCardProps> = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movie-details/${movie.id}`);
  };
  const handleAddToList = () => {};
  return (
    <div>
      <img
        src={movie.posterImage}
        style={{ width: "200px", height: "200px" }}
      />
      <p>{movie.title}</p>
      <p>{movie.releaseYear}</p>
    </div>
  );
};

export default Index;
