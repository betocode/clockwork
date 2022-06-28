import RemoveFavoriteMovieList from "../../../domain/useCases/RemoveFavoriteMovieList";
import { makeUserRepository } from "../repositories/makeUserRepositoryFactory";

export const makeRemoveFavoriteMovieList = (): RemoveFavoriteMovieList => {

    return new RemoveFavoriteMovieList(makeUserRepository());
}