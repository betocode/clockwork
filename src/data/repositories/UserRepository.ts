
import ILocalCache from "../interfaces/ILocalCache";
import {IUserRepository} from '../../domain/interfaces/repositories/IUserRepository'
import { MovieType } from "../../domain/models";
  
  class UserReposiory implements IUserRepository {
    /**
     *
     */
    constructor(private readonly cache:ILocalCache) {}
      addFavoriteMovie(movie: MovieType) {
        let movies:MovieType[] = []
        const moviesInCache = this.cache.get("movies");
        if(!moviesInCache) return this.cache.set("movies",movies);
        movies.push(moviesInCache);
        this.cache.set("movies",movies);
        
        

      };
      removeFavoriteMovie (movie:MovieType) {
        let movies:MovieType[] = []
        const moviesInCache = this.cache.get("movies");
        if(!moviesInCache) return;
        movies.push(moviesInCache);

        const newList = movies.filter(x=>x.id !== movie.id);
        this.cache.set("movies",newList);


      } 
      listFavoriteMovies ():MovieType[] {

        let movies:MovieType[] = []
        const moviesInCache = this.cache.get("movies");
        if(!moviesInCache) return movies;
        
        movies.push(moviesInCache);
        return movies;

      } 
 
  
  }
  
  export default UserReposiory;
  