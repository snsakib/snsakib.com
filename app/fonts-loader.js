import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const incompleeta = localFont({
  src: "../public/assets/fonts/incompleeta/IncompleetaRegular.woff2",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppings",
  weight: ["100", "300", "400", "700", "900"],
});
