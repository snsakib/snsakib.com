import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const hikou_outline = localFont({
  src: "../public/assets/fonts/hikou/hikou_outline-webfont.woff2",
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });
