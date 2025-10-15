import { Poppins, Orbitron, Iceland } from "next/font/google";
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

export const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const iceland = Iceland({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400"],
});

export const portico = localFont({
  src: "../public/assets/fonts/portico/PorticoOutline.woff",
  display: "swap"
});

export const hikou = localFont({
  src: "../public/assets/fonts/hikou/HikouOutline.otf",
  display: "swap"
})