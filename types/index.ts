export interface Movie {
id: number;
title: string;
name?: string; // for TV
overview: string;
poster_path?: string | null;
backdrop_path?: string | null;
release_date?: string;
}


export interface TMDBListResponse<T = Movie> {
page: number;
results: T[];
total_pages: number;
total_results: number;
}