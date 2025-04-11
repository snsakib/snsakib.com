import { Lato } from "next/font/google";
import localFont from "next/font/local";

export const incompleeta = localFont({
  src: "../public/assets/fonts/incompleeta/IncompleetaRegular.woff2",
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});
