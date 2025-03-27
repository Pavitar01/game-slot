import type { Metadata } from 'next'
import { Oxanium } from 'next/font/google'
import { StoreProvider } from '@/shared/providers/store-provider'
import './globals.css'

const oxanium = Oxanium({
  variable: '--font-oxanium',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Game Slot - Find Your Game',
  description: 'Find Best Gaming Website',
  icons: {
    icon: '/app-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${oxanium.variable}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
