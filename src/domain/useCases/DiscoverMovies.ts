import { IMovieRepository, MovieRepositoryParams } from "../interfaces/repositories/IMovieRepository";
import { MovieType } from "../models";

export default class DiscoverMovies{
    /**
     *
     */
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle(params:MovieRepositoryParams.ParamsMovieList):Promise<MovieType[]>{
       
        const response:MovieType[] = []
        let data = await this.repository.getMovieList(params)
        response.push(...data.movies);
         return response;
    }
}