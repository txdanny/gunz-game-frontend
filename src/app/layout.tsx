"use client";
import "@/styles/globals.scss";
import { dinAlternate, inter, montserrat, tungsten } from "@/styles/fonts";
import { GameProvider } from "@/contexts/gameProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${tungsten.variable} ${dinAlternate.variable} ${inter.variable} ${montserrat.variable}`}
      >
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
