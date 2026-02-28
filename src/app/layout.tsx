import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hack-N-Droid 2.0 | Android Club",
  description: "Innovation meets code. The flagship hackathon by Android Club.",
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
