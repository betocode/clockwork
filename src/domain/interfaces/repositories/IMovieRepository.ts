import { MovieType } from "../../models";

export interface IMovieRepository {
    getDetails:(id:number)=>Promise<MovieType | null>
    getSimilarMovies:(id:number,page:number)=>Promise<MovieRepositoryParams.MovieListResponse>
    getMovieImage:()=>Promise<any | null>
    getMovieList:(params:MovieRepositoryParams.ParamsMovieList)=>Promise<MovieRepositoryParams.MovieListResponse>
    getTopRated:(page:number)=>Promise<MovieType[]>
    searchMovie:(search_term:string,page:number)=>Promise<MovieRepositoryParams.MovieListResponse>
}





export namespace MovieRepositoryParams {
    export type ParamsMovieList = {
        "vote_average.lte":number,
        "vote_average.gte":number,
        with_genres:string,
        
    }

    export type MovieListResponse = {
        movies:MovieType[],
        page:number,
        total_pages:number,
        total_results:number
    }


}

