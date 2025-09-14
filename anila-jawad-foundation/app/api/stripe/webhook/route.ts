import { NextResponse } from 'next/server'

export async function POST() {
  // Placeholder: verify webhook with STRIPE_WEBHOOK_SECRET, then write Donation records via Prisma.
  return NextResponse.json({ received: true })
}
