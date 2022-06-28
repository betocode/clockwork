import { GenreModel } from "./GenreModel"

 export type MovieType = {
    id:number,
    original_title:string,
    overview:string,
    release_date:string,
    vote_average:number,
    genres:number[],
    backdrop_path:string,
    poster_path:string
}




export class MovieModel  {

    /**
     *
     */
     public id: number;
     public  title: string;
     public overview: string;
     public releaseDate: string;
     public rating:number;
     public   mainGenre:number;
     public genres: number[];
     public backgroundImage:string;
     public posterImage:string;
     public releaseYear:string;

  

    constructor(movie:MovieType) {
        this.id = movie.id;
        this.title = movie.original_title;
        this.overview = movie.overview;
        this.releaseDate = movie.original_title;
        this.rating = movie.vote_average;
        this.genres = movie.genres;
        this.mainGenre = movie.genres[0];
        this.backgroundImage = movie.backdrop_path;
        this.posterImage = movie.poster_path;
        this.releaseYear = movie.release_date.split('-')[0];
    }
  
    
    
}
