export type MovieType = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
export type SeriesType = {
    backdrop_path: string;
    first_air_date: string;

    genre_ids: number[];
    id: number;
    name: string;

    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
};
export type link = {
    icon: any;
    title: string;
    path: string;
};
export type movieDetailsType = {
    adult
        :
        boolean;
    backdrop_path
        :
        string;
    belongs_to_collection
        :
        belToCol[];
    budget
        :
        number;
    genres
        :
        genres[];
    homepage
        :
        string;
    id
        :
        number | string;
    imdb_id
        :
        string | number;
    original_language
        :
        string;
    original_title
        :
        string;
    overview
        :
        string;
    popularity
        :
        number;
    poster_path
        :
        string;
    production_companies
        :
        prodCop[];

    production_countries
        :
        prodCoun[];
    release_date
        :
        string;
    revenue
        :
        number;
    runtime
        :
        number;
    spoken_languages
        :
        spokenLan[];
    status
        :
        string;
    tagline
        :
        string;
    title
        :
        string;
    video
        :
        boolean;
    vote_average
        :
        number;
    vote_count
        :
        number;
}
export type seriesDetailsType = {
    adult: boolean;
    backdrop_path: string;
    created_by: [];
    episode_run_time: string;
    genres: genres[];
    homepage: string;
    id: number | string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: lastEpisodeToAir[]
    name: string;
    networks: networks[];
    original_language
        :
        string;
    original_name
        :
        string;
    overview
        :
        string;
    popularity
        :
        number;
    poster_path
        :
        string;
    production_companies
        :
        prodCop[];
    production_countries
        :
        prodCoun[];
    seasons
        :
        season[];
    spoken_languages
        :
        lang[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;

}
type belToCol = {
    backdrop_path
        :
        string;
    id
        :
        number | string;
    name
        :
        string;
    poster_path
        :
        string;
}
type spokenLan = { english_name: string; iso_639_1: string; name: string }
export type prodCop = { id: number | string; logo_path: string; name: string; origin_country: string };
type prodCoun = { iso_3166_1: string; name: string; };
export type genres = { id: number | string; name: string };
type lastEpisodeToAir = {
    air_date: string;
    episode_number: number;
    id: number | string;
    name: string;
    overview: string;
    networks: networks[];
    next_episode_to_air: string | null;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];

}
type lang = {
    english_name: string, iso_639_1: string; name: string;
}
export type season = {
    air_date
        :
        string;
    episode_count
        :
        number;
    id
        :
        number | string;
    name
        :
        string;
    overview
        :
        string;
    poster_path
        :
        string;
    season_number
        :
        number;
}
type networks = {
    id
        :
        number | string;
    logo_path
        :
        string;
    name
        :
        string;
    origin_country
        :
        string;
}
