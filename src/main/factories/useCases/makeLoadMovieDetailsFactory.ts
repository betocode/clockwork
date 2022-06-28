import LoadMovieDetails from "../../../domain/useCases/LoadMovieDetails";
import { makeMovieRepository } from "../repositories";



export const makeLoadMovieDetails = (): LoadMovieDetails => {

    return new LoadMovieDetails(makeMovieRepository());
}