import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
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

export const metadata: Metadata = {
  title: "RentYard",
  keywords: ["rent", "yard", "property management", "real estate"],
  authors: [{ name: "RentYard Team", url: "https://rentyard.com" }],
  creator: "RentYard Team",
  description: "RentYard - Your ultimate property management solution.",
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
        
        <main>
       
            {children}

        </main>
       <Footer />
      </body>
    </html>
  );
}
