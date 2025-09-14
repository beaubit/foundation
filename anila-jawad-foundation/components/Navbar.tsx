'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-[#3d3d3f] text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
        <Link href="/" className="flex items-center gap-3">
          <Image alt="Foundation Logo" src="/logo.png" width={40} height={40} className="rounded-full" />
          <span className="font-bold tracking-wide" style={{ fontFamily: 'var(--font-archivo)' }}>
            Anila & Jawad Iqbal Foundation
          </span>
        </Link>
        <div className="ml-auto hidden lg:flex items-center gap-8">
          <Link href="/about">ABOUT US</Link>
          <Link href="/donate">DONATE HERE</Link>
          <Link href="/partners">OUR PARTNERS</Link>
          <Link href="/blog">BLOG</Link>
          <div className="relative">
            <input className="rounded-full bg-white/90 pl-9 pr-3 py-1 text-black" placeholder="Search here..." />
            <Search className="w-4 h-4 text-black absolute left-2 top-1.5" />
          </div>
        </div>
      </div>
      {open && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          <Link href="/about" className="block">ABOUT US</Link>
          <Link href="/donate" className="block">DONATE HERE</Link>
          <Link href="/partners" className="block">OUR PARTNERS</Link>
          <Link href="/blog" className="block">BLOG</Link>
        </div>
      )}
    </nav>
  )
}
