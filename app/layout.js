'use client'

import '../styles/glabol.scss'
import Footer from '@/backbones/footer'
import Header from '@/backbones/header'


export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body >        
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
