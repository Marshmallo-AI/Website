import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marshmallo | Agents That Learn From Experience',
  description: 'Enterprise AI infrastructure that enables agents to learn from every interaction. Build trusted, consistent, and efficient AI systems in production.',
  keywords: ['AI agents', 'machine learning', 'agent learning', 'LLM', 'enterprise AI', 'continual learning'],
  authors: [{ name: 'Marshmallo AI' }],
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
      <body>
        {children}
        <div className="grain-overlay" />
      </body>
    </html>
  )
}
