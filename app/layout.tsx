
import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: "Management Consulting Company | A B Lincoln & Company",
  description: "AB lincoln test"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Avenir:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=FreightBig+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${pacifico.variable} antialiased font-avenir`}
        style={{ fontFamily: 'Avenir, system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
