import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Head from "next/head"; // Import next/head for managing head tags

const nunitoFont = Nunito({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alyeqeen Calculator And Currency Converter",
  description: "Al-Yeqeen App, Calculator, Currency Converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/faviLogo.png" />
      </head>
      <body className={`${nunitoFont.className} bg-white  flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-grow p-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
