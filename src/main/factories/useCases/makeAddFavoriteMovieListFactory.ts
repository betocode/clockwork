import AddFavoriteMovieList from "../../../domain/useCases/AddFavoriteMovieList";
import { makeUserRepository } from "../repositories/makeUserRepositoryFactory";

export const makeAddFavoriteMovieList = (): AddFavoriteMovieList => {

    return new AddFavoriteMovieList(makeUserRepository());
}