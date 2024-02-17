import { Inter } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const sunrise = localFont({
  src: "SUNRIZE.ttf",
  display: "swap",
});
