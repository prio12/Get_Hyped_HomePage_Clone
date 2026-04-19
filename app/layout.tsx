/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// 1. Import your new SmoothScroll component
import SmoothScroll from '@/components/SmoothScroll';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Get Hyped Clone',
  description: 'gethyped.nl clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* 2. Wrap children inside the SmoothScroll component */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
