import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";

const vazirmatn: NextFont = Vazirmatn({
  subsets: ['latin', 'arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Doc Book | رزرو دکتر",
  description: "پلتفرم جامع رزرو دکتر آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
