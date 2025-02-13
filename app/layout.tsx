import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elevate Media | Digital Marketing Agency",
  description:
    "Transform your digital presence with Elevate Media Marketing. We specialize in targeted advertising, PPC solutions, and strategic marketing planning to drive growth for your business.",
  keywords: [
    "digital marketing agency",
    "targeted advertising",
    "PPC advertising",
    "marketing strategy",
    "brand development",
    "social media marketing",
    "content creation",
    "SEO services",
    "web development",
    "online advertising",
    "digital transformation",
    "marketing automation",
    "business growth",
    "brand strategy",
    "digital solutions",
  ],
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
    shortcut: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
