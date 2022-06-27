import { HttpClient } from"../../../infra/http"

export const makeHttpClient = (): HttpClient => new HttpClient()