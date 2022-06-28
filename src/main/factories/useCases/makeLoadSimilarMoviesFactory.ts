import LoadSimilarMovies from "../../../domain/useCases/LoadSimilarMovies";
import { makeMovieRepository } from "../repositories";

export const makeLoadSimilarMovies = (): LoadSimilarMovies => {

    return new LoadSimilarMovies(makeMovieRepository());
}