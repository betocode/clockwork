import { GenreRepository } from "../../../data/repositories/GenreRepository";
import { IGenreRepository } from "../../../domain/interfaces/repositories/IGenreRepository";
import { makeApiUrl, makeHttpClient } from "../http";

export const makeGenreRepository = (): IGenreRepository => {

    return new GenreRepository(makeHttpClient(),makeApiUrl(`/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`))
}