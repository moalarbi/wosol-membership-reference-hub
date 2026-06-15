import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "WOSOL Membership Reference Hub",
  description: "مرجع داخلي لآلية ومعلومات عضويات WOSOL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/metropolis" />
      </head>
      <body className={arabic.variable}>
        <div className="pattern-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
