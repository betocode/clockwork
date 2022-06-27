import { GenreModel } from "../../models/GenreModel";

export interface IGenreRepository{
    getAllGenres:()=>Promise<GenreModel[]>
}




export namespace GenreRepositoryParams {
    export type GenresResponse = {
        genres:GenreModel[]
    }
}