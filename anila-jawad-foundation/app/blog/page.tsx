import Link from 'next/link'

const posts = [
  { slug: 'breaking-news', date: '2025-07-16', title: 'Breaking News: …', teaser: 'There will be a discussion…' },
  { slug: 'updates-badshahi', date: '2025-07-15', title: 'Updates for Badshahi Mosque visitors', teaser: 'New guidance…' },
  { slug: 'water-supply', date: '2025-07-15', title: 'Water supply impacted in Lahore', teaser: 'Key changes…' },
]

export default function BlogList() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-archivo)' }}>Current News in Pakistan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 group-hover:h-72 transition-all"></div>
            <div className="p-4">
              <div className="text-xs opacity-70">{p.date}</div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm opacity-80">{p.teaser}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
