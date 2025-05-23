import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import NavBar from '@/components/NavBar'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <NavBar/>
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
