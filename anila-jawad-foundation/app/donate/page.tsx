'use client'
import { useState } from 'react'

export default function DonatePage() {
  const [amount, setAmount] = useState(25)
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-archivo)' }}>Donate</h1>
      <div className="rounded-2xl border p-6 space-y-4">
        <label className="block">Amount (USD)</label>
        <input type="number" value={amount} onChange={e=>setAmount(parseInt(e.target.value||'0'))}
          className="w-full rounded-md border px-3 py-2" />
        <button onClick={() => alert('Stripe placeholder – connect keys in .env')}
          className="rounded-md bg-tealbrand px-4 py-2 text-white font-semibold">Donate with Stripe</button>
      </div>
    </div>
  )
}
