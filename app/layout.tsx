import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marlo | Agents That Learn Like Humans',
  description: 'Build AI agents that accumulate experience, learn from mistakes, and get better over time. From Marshmallow AI.',
  keywords: ['AI agents', 'machine learning', 'agent learning', 'LLM'],
  authors: [{ name: 'Marshmallow AI' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
