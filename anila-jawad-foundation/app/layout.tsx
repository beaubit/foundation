import './globals.css'
import type { Metadata } from 'next'
import { Archivo_Black, Quattrocento } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const archivo = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-archivo' })
const quattro = Quattrocento({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-quattro' })

export const metadata: Metadata = {
  title: 'Anila & Jawad Iqbal Foundation',
  description: 'Empowering Pakistan’s vulnerable through health, education, legal aid, and opportunity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${quattro.variable} min-h-screen flex flex-col`}>
        <header className="relative z-20">
          <div className="header-pattern absolute inset-x-0 top-0 h-6"></div>
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
