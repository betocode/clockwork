import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieModel } from "../models";

export default class LoadMovieDetails{
    /**
     *
     */
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle():Promise<MovieModel[]>{
        const response:MovieModel[] = []
         return response;
    }
}