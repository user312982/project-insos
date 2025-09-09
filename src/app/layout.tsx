import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RT54 - Website Resmi",
  description: "Website resmi RT54 - Informasi lengkap tentang sejarah, fasilitas, dan kegiatan masyarakat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="pt-16">
          {/* @ts-expect-error Async Server Component */}
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
