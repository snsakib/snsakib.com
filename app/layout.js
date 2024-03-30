import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import { poppins } from "@/app/fonts-loader";

export const metadata = {
  title: "S N Sakib | Web Developer & Blockchain Developer",
  description: "S N Sakib. A Web Developer & Blockchain Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
