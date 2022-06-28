import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieType } from "../models";

export default class ListMoviesBestRated{
    /**
     *
     */
    constructor(private readonly repository:IMovieRepository) {
        
    }
     async handle():Promise<MovieType[]>{
     const movies = await this.repository.getTopRated(1)
      return movies
    }
}