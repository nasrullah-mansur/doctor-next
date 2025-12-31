import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: 'Dr. Sumon RANA | Neurosurgery Specialist',
  description: 'Assistant Professor, Dept. of Neurosurgery, Dhaka Medical College & Hospital.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased flex flex-col min-h-screen`}
        cz-shortcut-listen="true"
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
