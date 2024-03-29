import type { Metadata } from 'next'
import { Lora, Cabin, Belleza } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const bellezaFont = Belleza({
  subsets: ['latin'],
  variable: "--font-belleza",
  weight: ['400']
})

const aeonik = localFont({
  src: [
    {
      path: '/fonts/Aeonik-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/Aeonik-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path:  '/fonts/Aeonik-Regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: "--font-aeonik",
})

const loraFont = Lora ({
  subsets: ['latin'],
  weight: [ '400','500', '600', '700'],
  display: 'swap',
  variable: "--font-lora",
})
export const metadata: Metadata = {
  title: "Planty'x",
  description: "Planty'x website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${loraFont.variable} ${aeonik.variable} ${bellezaFont.variable}`}>{children}</body>
    </html>
  )
}
