import { Noto_Sans, Mali } from "next/font/google";

export const maliFont = Mali({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
