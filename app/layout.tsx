import type { Metadata } from 'next'
import { Inter_Tight, Fira_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const firaSans = Fira_Sans({ 
  subsets: ["latin"],
  variable: '--font-fira-sans',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Gyan Prakash Rungta - Business Card',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
