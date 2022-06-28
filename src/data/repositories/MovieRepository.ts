import {
  IMovieRepository,
  MovieRepositoryParams,
} from "../../domain/interfaces/repositories/IMovieRepository";
import { MovieType } from "../../domain/models";
import { IHttpClient } from "../interfaces/IHttpClient";

class MovieRepository implements IMovieRepository {
  /**
   *
   */
  constructor(private readonly httpClientSingleResult:IHttpClient<MovieType>,private readonly httpClient:IHttpClient<MovieRepositoryParams.MovieListResponse>,private readonly url:string) {}
  async getTopRated (page: number):Promise<MovieType[]>{
    const movies:MovieType[] = [];
    return movies;
  }
  async getDetails(id: number): Promise<MovieType | null> {
    const response = await this.httpClient.request({    
      url: `${this.url}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`,
      method: "get",
      headers: ""});
      
    return null;
  }
  async getSimilarMovies(id: number): Promise<MovieRepositoryParams.MovieListResponse> {
    throw new Error("a");
  }
  async getMovieImage(): Promise<any> {
    throw new Error("a");
  }
  async getMovieList(
    params: MovieRepositoryParams.ParamsMovieList
  ): Promise<MovieRepositoryParams.MovieListResponse> {
    let movies:MovieRepositoryParams.MovieListResponse = {
      movies: [],
      page: 0,
      total_pages: 0,
      total_results: 0
    };
    const response = await this.httpClient.request({    
      url: `${this.url}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${params.with_genres}&vote_average.gte=${params["vote_average.gte"]}&vote_average.lte=${params["vote_average.lte"]}`,
      method: "get",
      headers: ""});
      if(response.body){
        movies = {...response.body};
      }
      return movies;


  }
  async searchMovie(search_term: string,page:number): Promise<MovieRepositoryParams.MovieListResponse> {
    throw new Error("a");
  }
}

export default MovieRepository;
