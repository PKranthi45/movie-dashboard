import './globals.css'
import Header from './components/Header'
import { ReactNode } from 'react'


export const metadata = {
title: 'Streaming Dashboard',
description: 'Simplified Streaming Dashboard - Next.js App Router + TypeScript',
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body>
<Header />
<main className="pt-20 min-h-screen">{children}</main>
</body>
</html>
)
}
