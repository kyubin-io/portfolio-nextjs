import { Orbitron } from "next/font/google";

const sumClass = (...classnames: string[]) => {
  return classnames.join(" ");
};

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbiton",
});

export const FontClassNames = sumClass(orbitron.className);
