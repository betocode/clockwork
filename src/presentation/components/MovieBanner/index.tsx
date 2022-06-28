import React from "react";
import { MovieType } from "../../../domain/models";

interface IMovieBanner extends React.FC {
  movie: MovieType;
}

const Index: React.FC<IMovieBanner> = ({ movie }: IMovieBanner) => {
  return <div>Index</div>;
};

export default Index;
