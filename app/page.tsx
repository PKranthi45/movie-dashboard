import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import { getPopular, getTopRated, getUpcoming } from '../lib/tmdb'
import { Movie } from '../types'


export default async function Page() {
// Server-side fetches
const [popular, topRated, upcoming] = await Promise.all([getPopular(), getTopRated(), getUpcoming()])


const popularMovies: Movie[] = popular.results
const topMovies: Movie[] = topRated.results
const upcomingMovies: Movie[] = upcoming.results


// Hero uses first popular movie
const heroMovie = popularMovies[0] ?? null


return (
<>
<Hero movie={heroMovie} />


<div className="space-y-6 mt-6">
<MovieRow movies={popularMovies} categoryTitle="Popular" />
<MovieRow movies={topMovies} categoryTitle="Top Rated" />
<MovieRow movies={upcomingMovies} categoryTitle="Upcoming" />
</div>
</>
)
}