import {
  IMovieRepository,
  MovieRepositoryParams,
} from "../../domain/interfaces/repositories/IMovieRepository";
import { MovieModel } from "../../domain/models";
import { IHttpClient } from "../interfaces/IHttpClient";

class MovieRepository implements IMovieRepository {
  /**
   *
   */
  constructor(private readonly httpClient:IHttpClient<MovieModel>,private readonly url:string) {}
  async getDetails(id: number): Promise<MovieModel | null> {
    const response = await this.httpClient.request({    url: "",
      method: "get",
      body: {},
      headers: ""});
      
    return null;
  }
  getSimilarMovies(id: number): Promise<MovieRepositoryParams.MovieListResponse> {
    throw new Error("a");
  }
  getMovieImage(): Promise<any> {
    throw new Error("a");
  }
  getMovieList(
    params: MovieRepositoryParams.ParamsMovieList
  ): Promise<MovieRepositoryParams.MovieListResponse> {
    throw new Error("a");
  }
  searchMovie(search_term: string,page:number): Promise<MovieRepositoryParams.MovieListResponse> {
    throw new Error("a");
  }
}

export default MovieRepository;
