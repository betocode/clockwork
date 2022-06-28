import UserRepository from "../../../data/repositories/UserRepository";
import { IUserRepository } from "../../../domain/interfaces/repositories/IUserRepository";
import { makeLocalCache } from "../cache/makeLocalCacheFactory";

export const makeUserRepository = (): IUserRepository => {

    return new UserRepository(makeLocalCache())
}