import Link from 'next/link'

export default function CTAButton({ href='/donate' }: { href?: string }) {
  return (
    <Link href={href} className="inline-block rounded-full px-6 py-3 font-bold text-white shadow-md"
      style={{ background: 'linear-gradient(180deg, #FFD83D, #F8C200)' }}>
      DONATE HERE
    </Link>
  )
}
