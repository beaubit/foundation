import Link from 'next/link'

const items = [
  { title: 'Blog Management', href: '/admin/blog' },
  { title: 'Donation Management', href: '/admin/donations' },
  { title: 'Mailing List Management', href: '/admin/mailing' },
  { title: 'Webpage Management', href: '/admin/pages' },
  { title: 'Website Analytics', href: '/admin/analytics' },
  { title: 'Settings & Integration', href: '/admin/settings' },
]

export default function AdminPanel() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-archivo)' }}>Admin Controls</h1>
      <div className="space-y-4">
        {items.map(i => (
          <Link key={i.title} href={i.href} className="block rounded-xl bg-tealbrand/80 text-white px-6 py-5 font-semibold">
            {i.title} +
          </Link>
        ))}
      </div>
    </div>
  )
}
