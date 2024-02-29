import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import HeroBanner from "./_components/HeroBanner";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Чіп Чендж",
  description: "Обмінник валют - навчальний",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={roboto.className}  lang="en">
      <body className="h-full mx-auto max-w-screen-xl">
        <Header />
        <HeroBanner />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}
