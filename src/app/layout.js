import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akshay Agarwal Portfolio',
  description: 'Front-end Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='relative overflow-x-hidden'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
