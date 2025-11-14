import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
return (
<header className="fixed top-0 left-0 right-0 z-40 bg-linear-to-b from-black/80 to-transparent">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<Link href="/" className="flex items-center gap-3">
<Image src="/logo.png" alt="logo" width={36} height={36} />
<span className="font-semibold text-lg">MovieDash</span>
</Link>
<nav className="hidden sm:flex gap-4 text-slate-300">
<Link href="#">Home</Link>
<Link href="#">Movies</Link>
<Link href="#">My List</Link>
</nav>
</div>
</header>
)
}