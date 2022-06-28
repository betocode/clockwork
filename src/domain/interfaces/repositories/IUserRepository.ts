import { MovieType } from "../../models";

export  interface IUserRepository {
    addFavoriteMovie:(movie:MovieType)=> void;
    removeFavoriteMovie:(movie:MovieType)=>void;
    listFavoriteMovies:()=>MovieType[];
}