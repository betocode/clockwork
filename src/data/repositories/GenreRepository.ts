import { GenreRepositoryParams, IGenreRepository } from "../../domain/interfaces/repositories/IGenreRepository";
import { GenreModel } from "../../domain/models/GenreModel";
import { IHttpClient } from "../interfaces/IHttpClient";

export class GenreRepository implements IGenreRepository {
  /**
   *
   */
  constructor(private readonly httpClient: IHttpClient<GenreRepositoryParams.GenresResponse>) {}

  async getAllGenres(): Promise<GenreModel[]> {
    const response: GenreModel[] = [];
    const data = await this.httpClient.request({
      url: "",
      method: "get",
      headers: "",
    });

    if (data.body) {
      response.push(...(data.body.genres as GenreModel[]));
    }
    return response;
  }
}
