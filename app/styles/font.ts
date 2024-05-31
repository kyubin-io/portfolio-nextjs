import { Roboto, Orbitron, Tilt_Prism } from "next/font/google";

const sumClass = (...classnames: string[]) => {
  return classnames.join(" ");
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-roboto",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const tiltPrism = Tilt_Prism({
  subsets: ["latin"],
  variable: "--font-tiltPrism",
});

export const FontClassNames = sumClass(
  roboto.className,
  orbitron.variable,
  tiltPrism.variable
);
