import Image from 'next/image'
import { Movie } from '../../types';

export default function Hero({ movie }: { movie: Movie | null }) {
if (!movie) return null
const title = movie.title ?? movie.name
const backdrop = movie.backdrop_path
const src = backdrop ? `https://image.tmdb.org/t/p/original${backdrop}` : ''


return (
<section className="relative h-[56vh] sm:h-[60vh] w-full overflow-hidden">
<div className="absolute inset-0">
{src && (
<Image
src={src}
alt={title}
fill
priority
sizes="100vw"
style={{ objectFit: 'cover' }}
/>
)}
<div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent" />
</div>


<div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
<h1 className="text-3xl sm:text-5xl font-bold">{title}</h1>
<p className="mt-4 max-w-2xl text-slate-200">{movie.overview}</p>
</div>
</section>
)
}