import { IMovieRepository } from "../interfaces/repositories/IMovieRepository";
import { MovieType } from "../models";

export default class LoadMovieDetails{
    /**
     *
     */
    constructor(private readonly repository:IMovieRepository) {
        
    }
    async handle():Promise<MovieType[]>{
        const response:MovieType[] = []
         return response;
    }
}