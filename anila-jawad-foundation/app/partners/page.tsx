import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { name: 'My Impact Meter', slug: 'my-impact-meter', logo: '/logo.png' },
  { name: 'Legal Aid Society', slug: 'legal-aid-society', logo: '/logo.png' },
  { name: 'Meethi Zindigi', slug: 'meethi-zindigi', logo: '/logo.png' },
]

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 opacity-60">
          <div className="bg-gray-300" />
          <div className="bg-gray-400" />
          <div className="bg-gray-300" />
        </div>
        <div className="relative p-10 text-white">
          <h1 className="text-5xl font-bold" style={{ fontFamily: 'var(--font-archivo)' }}>OUR PARTNERS</h1>
          <p className="mt-2 max-w-2xl text-lg">Working together to empower women, provide insulin, food and aid for victims of abuse.</p>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {partners.map(p => (
          <Link key={p.slug} href={`/partners/${p.slug}`} className="flex items-center justify-center p-6 rounded-2xl border hover:shadow-md transition">
            <div className="text-center">
              <Image src={p.logo} alt={p.name} width={96} height={96} className="mx-auto rounded-full" />
              <div className="mt-2 font-semibold">{p.name}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
