import { IGenreRepository } from "../interfaces/repositories/IGenreRepository";
import { MovieType } from "../models";
import { GenreModel } from "../models/GenreModel";

export default class LoadGenres{
    /**
     *
     */
    constructor(private readonly repository:IGenreRepository) {
        
    }
    async handle():Promise<GenreModel[]>{
        const response:GenreModel[] = []

        const data = await this.repository.getAllGenres();
        response.push(...data)
         return response;
    }
}