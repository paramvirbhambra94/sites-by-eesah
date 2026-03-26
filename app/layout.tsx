import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sites By Eesah",
  description: "Custom websites built around your vision.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
