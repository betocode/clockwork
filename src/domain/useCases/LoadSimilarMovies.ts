import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieType } from "../models";

export default class LoadSimilarMovies{
    /**
     *
     */
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle(id:number,page:number):Promise<MovieType[]>{
        const response:MovieType[] = []
        const data = await this.repository.getSimilarMovies(id,page);
        response.push(...data.movies);
         return response;
    }
}