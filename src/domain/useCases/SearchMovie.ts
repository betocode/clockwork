import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieModel } from "../models";

export default class SearchMovie{
  
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle(search_term:string,page:number):Promise<MovieModel[]>{
        const response:MovieModel[] = []
        let data = await this.repository.searchMovie(search_term,page);
        response.push(...data.movies);
         return response;
    }
}