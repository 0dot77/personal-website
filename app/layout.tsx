import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const minecraft = localFont({
  src: "./fonts/Minecraft.ttf",
  variable: "--font-minecraft",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "0dot77",
  description: "0dot77 | YOO TAEYANG Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${minecraft.variable} font-minecraft antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
