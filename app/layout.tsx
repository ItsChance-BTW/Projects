import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'

export const metadata: Metadata = {
  title: "GreatFrontEnd Projects",
  description: "Project repo",
};

const notoSans = Noto_Sans({
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
