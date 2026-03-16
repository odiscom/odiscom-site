import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Odiscom — Fiber & Tower Infrastructure",
  description:
    "Engineering, fielding, and construction support for fiber, telecom, and tower infrastructure.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0f3f3b]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}