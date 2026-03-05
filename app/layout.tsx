import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ODISCOM — Fiber & Tower",
  description:
    "Telecom engineering, fiber infrastructure, and tower services supporting nationwide network deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body>
  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}
