import ListMoviesBestRated from "../../../domain/useCases/ListMoviesBestRated";
import { makeMovieRepository } from "../repositories";

export const makeListMoviesBestRated = (): ListMoviesBestRated => {

    return new ListMoviesBestRated(makeMovieRepository());
}