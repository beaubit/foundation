'use client'
import { useEffect, useState } from 'react'
import CTAButton from './CTAButton'

const slides = [
  { title: 'OUR MISSION', text: 'Empowering Pakistan’s vulnerable through health, education, legal aid, and opportunity.', cta: '/donate' },
  { title: 'ABOUT US', text: 'Learn more about the foundation’s story and impact.', cta: '/about' },
  { title: 'OUR PARTNERS', text: 'Working together with trusted organizations.', cta: '/partners' },
]

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 10000) // 10 seconds
    return () => clearInterval(id)
  }, [])
  const slide = slides[index]
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 text-center">
      <div className="rounded-2xl bg-tealbrand/90 text-white p-10 shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-archivo)' }}>{slide.title}</h2>
        <p className="text-lg md:text-xl mb-6">{slide.text}</p>
        <CTAButton href={slide.cta} />
      </div>
      <div className="mt-4 text-xs opacity-70">Slide {index+1} / {slides.length}</div>
    </section>
  )
}
