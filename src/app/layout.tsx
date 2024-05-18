import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./sass/styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magnitude Classic",
  description: "World of Warcraft Guild",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dsk5pri.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
