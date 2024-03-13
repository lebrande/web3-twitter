import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 Twitter',
  description: 'Web3 Twitter',
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {props.children}
        </Providers>
      </body>
    </html>
  )
}
