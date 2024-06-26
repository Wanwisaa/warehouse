import './globals.css'
import { Kanit } from 'next/font/google'
 
const kanit = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={kanit.className}>
        <body>{children}</body>
      </html>
    )
  }
  