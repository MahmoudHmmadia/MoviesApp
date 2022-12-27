//"https://api.themoviedb.org/3/search/movie?query=game&api_key=3d597428ce3fd2b3b18cd0b97fe44148&language=en-US&page=1&include_adult=false"

import axios from "axios";

class Api {
    apiKey: string;
    baseUrl: string;

    constructor() {
        this.apiKey = "3d597428ce3fd2b3b18cd0b97fe44148";
        this.baseUrl = "https://api.themoviedb.org/3";
    }

    originalImage(imageBath: string) {
        return `https://image.tmdb.org/t/p/original/${imageBath}`;
    }

    getVideo(id: number, type: string) {
        return `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${this.apiKey}&language=en-US`
    }

    getList(category: string | undefined, type: string, pageNumber?: number) {
        return `${this.baseUrl}/${type}/${category}?api_key=${this.apiKey}&language=en-US&page=${pageNumber}`;
    }

    getDetails(id: number | string, type: string) {
        return `https://api.themoviedb.org/3/${type}/${id}?api_key=${this.apiKey}&language=en-US`;
    }

    search(query: string, type: string) {
        return `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=${this.apiKey}&language=en-US&page=1&include_adult=false`;
    }
    similar(type:string , id:number|string){
        return `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${this.apiKey}&language=en-US&page=1`;
        }

}

export default Api;
