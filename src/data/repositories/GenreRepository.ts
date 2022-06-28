import { GenreRepositoryParams, IGenreRepository } from "../../domain/interfaces/repositories/IGenreRepository";
import { GenreModel } from "../../domain/models/GenreModel";
import { IHttpClient } from "../interfaces/IHttpClient";

export class GenreRepository implements IGenreRepository {
  /**
   *
   */
  constructor(private readonly httpClient: IHttpClient<GenreRepositoryParams.GenresResponse>,private readonly url:string) {}

  async getAllGenres(): Promise<GenreModel[]> {
    const response: GenreModel[] = [];
    const data = await this.httpClient.request({
      url: this.url,
      method: "get",
      headers: "",
    });
    
    console.log('oi...')
    console.log(data)

    if (data.body) {
      response.push(...data.body.genres as GenreModel[]);
    }
    return response;
  }
}
