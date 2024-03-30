import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import { inter } from "./font-loader";

export const metadata = {
  title: "S N Sakib | Web Developer & Blockchain Developer",
  description: "S N Sakib. A Web Developer & Blockchain Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
