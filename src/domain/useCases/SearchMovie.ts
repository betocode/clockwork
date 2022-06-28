import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieType } from "../models";

export default class SearchMovie{
  
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle(search_term:string,page:number):Promise<MovieType[]>{
        const response:MovieType[] = []
        let data = await this.repository.searchMovie(search_term,page);
        response.push(...data.movies);
         return response;
    }
}