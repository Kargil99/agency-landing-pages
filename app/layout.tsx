import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Automation Agency',
  description: 'Enterprise-grade AI automation solutions for recruitment, legal tech, and food safety',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  )
}
