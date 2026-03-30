import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odiscom.com"),

  title: {
    default:
      "Telecom Engineering, Fiber, Wireless & Tower Support | Odiscom",
    template: "%s | Odiscom",
  },

  description:
    "Odiscom provides telecom engineering, fiber, wireless, tower, and construction support for real-world infrastructure deployment across Texas and nationwide.",

  keywords: [
    "telecom engineering",
    "fiber engineering",
    "wireless infrastructure",
    "tower engineering",
    "OSP engineering",
    "telecom construction",
    "fiber deployment",
    "telecom consulting",
    "Houston telecom engineering",
    "Texas telecom engineering",
  ],

  openGraph: {
    title: "Odiscom | Telecom Infrastructure Support",
    description:
      "Fiber, wireless, and telecom infrastructure engineering built for real-world deployment.",
    url: "https://www.odiscom.com",
    siteName: "Odiscom",
    images: [
      {
        url: "/images/og-image.jpg", // add later if needed
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Odiscom | Telecom Infrastructure Support",
    description:
      "Fiber, wireless, and telecom infrastructure engineering built for real-world deployment.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}