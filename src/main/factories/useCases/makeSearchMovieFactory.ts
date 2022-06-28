import SearchMovie from "../../../domain/useCases/SearchMovie";
import { makeMovieRepository } from "../repositories";

export const makeSearchMovie = (): SearchMovie => {

    return new SearchMovie(makeMovieRepository());
}