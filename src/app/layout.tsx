import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArtGallery — A Journey Through Art History",
  description:
    "Explore 20 public-domain masterpieces spanning the Renaissance, Baroque, Romanticism, Impressionism, and Modern eras. Discover the stories behind each painting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
