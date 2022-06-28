import ILocalCache from "../../../data/interfaces/ILocalCache"
import LocalCache from "../../../infra/cache/LocalCache"
import { HttpClient } from"../../../infra/http"

export const makeLocalCache = (): ILocalCache => new LocalCache()