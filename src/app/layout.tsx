"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from "next-auth/react"


const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: '1zdevcamp',
  description: '1zdevcamp template',
}

export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode,
  pageProps: any
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  )
}