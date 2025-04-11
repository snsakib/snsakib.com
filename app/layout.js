import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import "./globals.css";
import { lato } from "@/app/fonts-loader";

export const metadata = {
  title: "S N Sakib | Full-Stack Web Developer & Blockchain Developer",
  description: "S N Sakib. A Full-Stack Web Developer & Blockchain Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
