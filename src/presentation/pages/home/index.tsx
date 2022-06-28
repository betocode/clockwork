import React, { useContext, useEffect, useState } from "react";
import { MovieModel, MovieType } from "../../../domain/models";
import DiscoverMovies from "../../../domain/useCases/DiscoverMovies";
import ListFavoriteMovies from "../../../domain/useCases/ListFavoriteMovies";
import SearchMovie from "../../../domain/useCases/SearchMovie";
import MakeMovieFilterContext from "../../../main/factories/context/makeMovieFilterProvider";
import { MovieBanner, MovieList } from "../../components";
import MovieFilterContext from "../../context/movieFilterContext";
import {
  FilterContainer,
  MoviesContainer,
  SearchContainer,
  MainSection,
} from "./styles";

type HomeProps = {
  discoverMovies: DiscoverMovies;
  searchMovie: SearchMovie;
  listFavoriteMovies: ListFavoriteMovies;
};

const Home: React.FC<HomeProps> = ({
  discoverMovies,
  searchMovie,
  listFavoriteMovies,
}) => {
  const movieFilterContext = useContext(MovieFilterContext);
  const [movies, setMovies] = useState<MovieModel[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const genreIds = movieFilterContext.selectedGenres
      .map((x) => x.id)
      .join(",");
    let apiData = await discoverMovies.handle({
      "vote_average.gte": movieFilterContext.selectedRating,
      "vote_average.lte": 10,
      with_genres: genreIds,
    });

    setMovies(apiData.map((item) => new MovieModel(item)));
  };
  return (
    <div>
      {/* <MovieBanner/> */}
      <MainSection>
        <FilterContainer>filtro</FilterContainer>
        <MoviesContainer>
          <MovieList title="Discover" movies={movies} />
        </MoviesContainer>
      </MainSection>
    </div>
  );
};

export default Home;
