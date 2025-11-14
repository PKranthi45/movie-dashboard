import { getMovieById } from '../../../lib/tmdb'
import Image from 'next/image'
import { Movie } from '../../../types'


interface Props { params: { id: string } }


export default async function MoviePage({ params }: Props) {
const movie: Movie = await getMovieById(params.id)
const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''


return (
<div className="max-w-6xl mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="relative w-full h-96 md:h-112 rounded overflow-hidden">
{poster && <Image src={poster} alt={movie.title ?? movie.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />}
</div>
<div className="md:col-span-2">
<h1 className="text-3xl font-bold">{movie.title ?? movie.name}</h1>
<p className="mt-4 text-slate-200">{movie.overview}</p>
<p className="mt-6 text-sm text-slate-400">Release: {movie.release_date ?? 'N/A'}</p>
</div>
</div>
</div>
)
}