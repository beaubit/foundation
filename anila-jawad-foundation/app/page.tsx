import Slideshow from '@/components/Slideshow'
import CTAButton from '@/components/CTAButton'

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-archivo)' }}>
            Empowering Pakistan’s Vulnerable
          </h1>
          <CTAButton />
        </div>
      </section>
      <Slideshow />
    </div>
  )
}
