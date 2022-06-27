import {MovieModel} from "../../../domain/models";

export interface IFindMovie {
    find:(params:FindMovie.Params) => Promise<MovieModel>
}


export namespace FindMovie {
    export type Params = {

    }
}