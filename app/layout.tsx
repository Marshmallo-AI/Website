import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
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
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#000000',
                colorLink: '#000000',
                colorText: '#1a1a1a',
                colorTextSecondary: '#666666',
                fontFamily: "'Space Mono', monospace",
                borderRadius: 0,
              },
              components: {
                Button: {
                  primaryColor: '#ffffff',
                  defaultBg: '#000000',
                  defaultColor: '#ffffff',
                  defaultBorderColor: '#000000',
                  paddingInline: 32,
                  controlHeight: 48,
                  fontWeight: 700,
                },
                Typography: {
                  fontFamilyCode: "'Space Mono', monospace",
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
