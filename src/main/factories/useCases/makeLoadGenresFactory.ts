import LoadGenres from "../../../domain/useCases/LoadGenres";
import { makeGenreRepository } from "../repositories/makeGenreRepositoryFactory";



export const makeLoadGenres = (): LoadGenres => {

    return new LoadGenres(makeGenreRepository());
}