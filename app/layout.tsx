import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'
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

const theme = {
  token: {
    colorPrimary: '#c4a7ff',
    colorBgBase: '#050505',
    colorBgContainer: '#111111',
    colorBgElevated: '#0c0c0c',
    colorBorder: 'rgba(255, 255, 255, 0.06)',
    colorText: '#fafafa',
    colorTextSecondary: '#888888',
    colorTextTertiary: '#666666',
    borderRadius: 12,
    fontFamily: "'Lato', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  components: {
    Card: {
      colorBgContainer: '#111111',
      colorBorderSecondary: 'rgba(255, 255, 255, 0.06)',
    },
    Button: {
      colorPrimary: '#c4a7ff',
      algorithm: true,
      fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    Typography: {
      colorText: '#fafafa',
      colorTextSecondary: '#888888',
      fontFamilyHeading: "'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },
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
          <ConfigProvider theme={theme}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
        <div className="grain-overlay" />
      </body>
    </html>
  )
}
