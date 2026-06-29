import './globals.css'

export const metadata = {
  title: 'Meenakshi Sankaran - Resume',
  description: 'Professional Resume built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
