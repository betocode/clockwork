import DiscoverMovies from "../../../domain/useCases/DiscoverMovies";
import { makeMovieRepository } from "../repositories";



export const makeDiscoverMovies = (): DiscoverMovies => {

    return new DiscoverMovies(makeMovieRepository());
}