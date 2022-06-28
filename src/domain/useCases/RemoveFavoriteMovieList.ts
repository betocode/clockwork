import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { MovieType } from "../models";

export default class RemoveFavoriteMovieList{
    /**
     *
     */
    constructor(private readonly repository:IUserRepository) {
        
    }
     handle(movie:MovieType):void{
     this.repository.removeFavoriteMovie(movie);
    }
}