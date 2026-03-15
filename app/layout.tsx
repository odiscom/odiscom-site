import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "ODISCOM — Fiber & Tower",
  description: "Telecom engineering and infrastructure construction services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}