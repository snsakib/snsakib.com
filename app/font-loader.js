import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const incompleeta = localFont({
  src: "../public/assets/fonts/Incompleeta/IncompleetaRegular.woff",
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });
