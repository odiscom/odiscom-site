import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "ODISCOM — Fiber & Tower",
  description:
    "Telecommunications engineering, fiber infrastructure development, tower services, and construction support nationwide.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0f3f3b] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
