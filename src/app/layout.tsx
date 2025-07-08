import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authentication System",
  description: "Simple authentication system with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}