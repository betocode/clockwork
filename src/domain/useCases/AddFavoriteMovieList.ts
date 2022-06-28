import { IMovieRepository, MovieRepositoryParams } from "../interfaces/repositories/IMovieRepository";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { MovieType } from "../models";

export default class AddFavoriteMovie{
    /**
     *
     */
    constructor(private readonly repository:IUserRepository) {
        
    }
     handle(movie:MovieType):void{
       const movies = this.repository.listFavoriteMovies();
       
       const movieExist = movies.find(x=>x.id === movie.id);
       if(movieExist !== undefined) return;

        this.repository.addFavoriteMovie(movie);
      
    }
}