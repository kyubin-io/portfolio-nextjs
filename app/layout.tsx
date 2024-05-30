import type { Metadata } from "next";
import "./globals.css";
import { FontClassNames } from "./styles/font";

export const metadata: Metadata = {
  title: {
    default: "Kyubin's Portfolio",
    template: "Kyubin's Portfolio | %s",
  },
  description: "Kyubin's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={FontClassNames}>{children}</body>
    </html>
  );
}
