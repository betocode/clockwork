import MovieRepository from "../../../data/repositories/MovieRepository";
import { IMovieRepository } from "../../../domain/interfaces/repositories/IMovieRepository";
import { makeApiUrl, makeHttpClient } from "../http";

export const makeMovieRepository = (): IMovieRepository => {

    return new MovieRepository(makeHttpClient(),makeApiUrl(""))
}