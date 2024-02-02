import type { Metadata } from "next";
import "@/app/globals.css";
import { cakra, turretRoad } from "@/public/fonts";
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";

export const metadata: Metadata = {
  title: "Designathon '24",
  description:
    "Designathon conducted as a part of Tech Fest organized by Christ College of Engineering, Irinjalakuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/designathon-logo.svg" />
      </head>

      <body
        className={`${turretRoad.variable} ${cakra.variable} antialiased bg-dark`}
      >
        {children}

        <footer>
          <Connect />
          <SocialConnect />
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
