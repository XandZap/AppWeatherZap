import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeatherZap",
  description: "Stay Ahead of the Weather with Accurate Forecasts!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className + " overflow-x-hidden min-h-screen bg-gradient-to-br from-green to-purple"}>
        <Header />
        {children}
      </body>
    </html>
  );
}

