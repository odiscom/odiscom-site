import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odiscom.com"),
  title: {
    default: "Telecom Engineering, Fiber, Wireless & Tower Support | Odiscom",
    template: "%s | Odiscom",
  },
  description:
    "Odiscom provides telecom engineering, fiber, wireless, tower, and construction support for real-world infrastructure deployment across Texas and nationwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
