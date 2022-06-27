import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieModel } from "../models";

export default class LoadSimilarMovies{
    /**
     *
     */
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle(id:number,page:number):Promise<MovieModel[]>{
        const response:MovieModel[] = []
        const data = await this.repository.getSimilarMovies(id,page);
        response.push(...data.movies);
         return response;
    }
}