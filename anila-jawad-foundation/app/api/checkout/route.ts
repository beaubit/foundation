import { NextResponse } from 'next/server'

export async function POST() {
  // Placeholder: create Stripe Checkout session here using STRIPE_SECRET_KEY
  return NextResponse.json({ url: '/donate' })
}
