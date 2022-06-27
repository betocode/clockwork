import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieModel } from "../models";

export default class DiscoverMovies{
    /**
     *
     */
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle(params:any):Promise<MovieModel[]>{
        const response:MovieModel[] = []
        let data = await this.repository.getMovieList(params)
        response.push(...data.movies);
         return response;
    }
}