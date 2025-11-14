import Image from 'next/image'
import Link from 'next/link'
import { Movie } from '../types'


export default function MovieRow({ movies, categoryTitle }: { movies: Movie[]; categoryTitle: string }) {
return (
<div className="max-w-6xl mx-auto px-4 py-6">
<h2 className="text-xl font-semibold mb-3">{categoryTitle}</h2>
<div className="flex gap-3 overflow-x-auto pb-2 snap-x">
{movies.map((m) => {
const poster = m.poster_path ? `https://image.tmdb.org/t/p/w342${m.poster_path}` : '/no-poster.png'
return (
<Link key={m.id} href={`/movie/${m.id}`} className="shrink-0 snap-start w-40 sm:w-48">
<div className="relative h-60 sm:h-72 rounded-md overflow-hidden">
<Image src={poster} alt={m.title || m.name || 'poster'} fill sizes="(max-width: 640px) 40vw, 12rem" style={{ objectFit: 'cover' }} />
</div>
<div className="mt-2 text-sm text-slate-200 truncate">{m.title ?? m.name}</div>
</Link>
)
})}
</div>
</div>
)
}