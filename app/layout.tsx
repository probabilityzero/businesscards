import type { Metadata } from 'next'
import { Inter_Tight, Fira_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const interTight = Inter_Tight({ 
  subsets: ["latin"],
  variable: '--font-inter-tight',
  weight: ['300', '400', '500', '600', '700', '800']
});

const firaSans = Fira_Sans({ 
  subsets: ["latin"],
  variable: '--font-fira-sans',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Elena Sîli - Contact',
  description: 'Professional Translator & Interpreter',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#01a1e2' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  themeColor: '#01a1e2',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Elena Sîli',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#01a1e2" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      </head>
      <body className={`${interTight.variable} ${firaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
