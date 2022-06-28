import ListFavoriteMovies from "../../../domain/useCases/ListFavoriteMovies";
import { makeUserRepository } from "../repositories/makeUserRepositoryFactory";

export const makeListFavoriteMovies = (): ListFavoriteMovies => {

    return new ListFavoriteMovies(makeUserRepository());
}