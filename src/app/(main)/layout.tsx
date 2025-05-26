import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "A Ranjan",
  description: "A personal portfolio website showcasing projects and skills.",
  icons:"/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
