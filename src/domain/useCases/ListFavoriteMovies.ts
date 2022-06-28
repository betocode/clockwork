import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { MovieType } from "../models";

export default class ListFavoriteMovies{
    /**
     *
     */
    constructor(private readonly repository:IUserRepository) {
        
    }
     handle():MovieType[]{
     const movies = this.repository.listFavoriteMovies()
      return movies
    }
}