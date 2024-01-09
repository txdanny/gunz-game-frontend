"use client";
import "@/styles/globals.scss";
import { dinAlternate, inter, tungsten } from "@/styles/fonts";
import { SessionProvider } from "next-auth/react";
import { GameProvider } from "@/contexts/gameProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${tungsten.variable} ${dinAlternate.variable} ${inter.variable}`}
      >
        <SessionProvider>
          <GameProvider>{children}</GameProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
