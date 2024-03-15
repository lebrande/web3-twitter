import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar';
import { Container, VStack } from '@chakra-ui/react';

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
          <Container maxW="md">
            <VStack alignItems="stretch" gap="2rem" my="2rem">
              {props.children}
            </VStack>
          </Container>
        </Providers>
      </body>
    </html>
  )
}
