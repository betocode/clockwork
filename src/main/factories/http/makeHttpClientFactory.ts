import { IHttpClient } from "../../../data/interfaces/IHttpClient"
import { HttpClient } from"../../../infra/http"

export const makeHttpClient = (): IHttpClient => new HttpClient()