import "./globals.css"
import Navbar from "../components/Navbar"

export const metadata = {
  title: "ODISCOM — Fiber & Tower",
  description: "Telecom engineering and infrastructure construction services.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}