import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const darkTheme = {
    className: "dark-theme",
    theme: {
      colors: {
        primary: "#0070f3",
        background: "#0000",
        text: "#ffffff",
      },
    },
  };

  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container m-auto`}
      >
        <NextThemesProvider
          defaultTheme="dark"
          attribute="class"
          value={{
            light: darkTheme.className,
            dark: darkTheme.className,
          }}
          enableSystem={true}
        >
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
