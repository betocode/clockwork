import { MovieModel } from "../../models";

export interface IMovieRepository {
    getDetails:(id:number)=>Promise<MovieModel | null>
    getSimilarMovies:(id:number,page:number)=>Promise<MovieRepositoryParams.MovieListResponse>
    getMovieImage:()=>Promise<any | null>
    getMovieList:(params:MovieRepositoryParams.ParamsMovieList)=>Promise<MovieRepositoryParams.MovieListResponse>
    searchMovie:(search_term:string,page:number)=>Promise<MovieRepositoryParams.MovieListResponse>
}





export namespace MovieRepositoryParams {
    export type ParamsMovieList = {

    }

    export type MovieListResponse = {
        movies:MovieModel[],
        page:number,
        total_pages:number,
        total_results:number
    }


}

