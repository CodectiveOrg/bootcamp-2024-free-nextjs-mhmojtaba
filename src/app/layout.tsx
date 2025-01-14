import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";

import "@/styles/typography.css";
import "./globals.css";
import FooterComponent from "@/components/footer/footer.component";
import DoctorProvider from "@/providers/doctors.provider";
import { ThemeProvider } from "@/providers/theme.provider";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

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
      <body>
        <ThemeProvider>
          <DoctorProvider>
            <HeaderComponent />
            {children}
            <p className={"tag"}>
              نوبت دهی پزشکی، سامانه جستجو و نوبت دهی اینترنتی پزشکان
            </p>
            <FooterComponent />
          </DoctorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
