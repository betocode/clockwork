import React, { useCallback, useEffect, useState } from "react";
import { GenreModel } from "../../domain/models/GenreModel";
import LoadGenres from "../../domain/useCases/LoadGenres";

type Props = {
  children: React.ReactNode;
  loadGenres: LoadGenres;
};

export interface IGenreContext {
  genres: GenreModel[];
  setSelectedGenres: (id: number) => void;
  selectedGenres: GenreModel[];
  setSelectedRating: (rating: number) => void;
  selectedRating: number;
}

export const MovieFilterContext = React.createContext<IGenreContext>(null!);

export const MovieFilterProvider: React.FC<Props> = ({
  children,
  loadGenres,
}) => {
  const [genres, setGenres] = useState<GenreModel[]>([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const call = async () => {
      const data = await loadGenres.handle();
      setGenres(data);
    };
    call();
  }, []);

  const handleGenresChange = useCallback(
    (id: number) => {
      const actualGenres = { ...genres };
      // filterlogic
    },
    [selectedGenres, genres]
  );
  const handleRatingChange = useCallback(
    (value: number) => {
      setRating(value);
    },
    [rating]
  );
  return (
    <MovieFilterContext.Provider
      value={{
        genres,
        selectedGenres,
        setSelectedGenres: (val) => handleGenresChange(val),
        setSelectedRating: (val) => handleRatingChange(val),
        selectedRating: rating,
      }}
    >
      {children}
    </MovieFilterContext.Provider>
  );
};

export default MovieFilterContext;
