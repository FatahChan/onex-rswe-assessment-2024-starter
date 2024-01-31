import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainNavigation from "@/components/mainNavigation";

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Family/Graphik-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Family/Graphik-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Family/Graphik-Semibold-Trial.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Family/Graphik-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "EVFY",
  description: "EVFY Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={graphik.className}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
