"use client";
import "@/styles/globals.scss";
import { dinAlternate, inter, montserrat, tungsten } from "@/styles/fonts";
import { GameProvider } from "@/contexts/gameProvider";
import { ModalProvider } from "@/contexts/modalProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${tungsten.variable} ${dinAlternate.variable} ${inter.variable}`}
      >
        <GameProvider>
          <ModalProvider>{children}</ModalProvider>
        </GameProvider>
      </body>
    </html>
  );
}
