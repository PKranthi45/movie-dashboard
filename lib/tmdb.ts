import { TMDBListResponse, Movie } from '../types';

const BASE = "https://api.themoviedb.org/3";
const TOKEN = process.env.TMDB_ACCESS_TOKEN; // v4 token

if (!TOKEN) {
  throw new Error("Missing TMDB_ACCESS_TOKEN in .env.local");
}

export async function fetchTMDB<T = any>(
  path: string,
  params: Record<string, string | number | undefined> = {}
) {
  const url = new URL(BASE + path);

  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined) url.searchParams.set(k, String(v));
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${TOKEN}`, // IMPORTANT
      Accept: "application/json",
    },
    next: { revalidate: 60 * 5 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("TMDB raw error:", errorText);
    throw new Error(`TMDB fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export async function getPopular() {
  return fetchTMDB<TMDBListResponse<Movie>>("/movie/popular", {
    language: "en-US",
    page: 1,
  });
}

export async function getTopRated() {
  return fetchTMDB<TMDBListResponse<Movie>>("/movie/top_rated", {
    language: "en-US",
    page: 1,
  });
}

export async function getUpcoming() {
  return fetchTMDB<TMDBListResponse<Movie>>("/movie/upcoming", {
    language: "en-US",
    page: 1,
  });
}

export async function getMovieById(id: string | number) {
  return fetchTMDB<Movie>(`/movie/${id}`, {
    language: "en-US",
  });
}
