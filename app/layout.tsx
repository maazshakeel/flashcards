import type { Metadata } from "next";
import { Chakra_Petch as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

import { Toaster } from "@/components/ui/toaster";

// Create a new instance of QueryClient

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "500",
});

export const metadata: Metadata = {
  title: "LetFlash",
  description: "Play and Practice with interactive flashcards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
