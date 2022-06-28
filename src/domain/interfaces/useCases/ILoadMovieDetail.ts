import {MovieType} from "../../../domain/models";

export interface IFindMovie {
    find:(params:FindMovie.Params) => Promise<MovieType>
}


export namespace FindMovie {
    export type Params = {

    }
}