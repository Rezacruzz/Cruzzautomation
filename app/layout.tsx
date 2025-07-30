import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cruzz Automation - Trusted Marine & Industrial Products",
  description:
    "Leading exporters of marine and industrial products with 1+ years of experience. Quality products, timely delivery, and exceptional customer satisfaction.",
   icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg',  },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
