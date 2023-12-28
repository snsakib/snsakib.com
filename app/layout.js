import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "S N Sakib | Web Developer & Blockchain Developer",
  description: "S N Sakib. A Web Developer & Blockchain Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
