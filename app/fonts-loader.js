import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const incompleeta = localFont({
  src: "../public/assets/fonts/incompleeta/IncompleetaRegular.woff2",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
