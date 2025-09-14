import CTAButton from '@/components/CTAButton'

export default function PartnerDetail() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold mb-4" style={ fontFamily: 'var(--font-archivo)' }>Legal Aid Society</h1>
      <p className="max-w-3xl mb-6">Partner description placeholder. Replace with real copy and media per the Canva layout. Embed video and social links here.</p>
      <CTAButton href="/donate" />
    </div>
  )
}
