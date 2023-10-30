import { Onest } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const onest = Onest({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = {
  title: 'Michael\'s Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  )
}
