import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EventGuide.ai | SMS-based Q&A for Conferences & Festivals",
  description: "Get instant answers to all your questions at conferences and festivals via SMS with EventGuide.ai",
  keywords: ["event guide", "festival guide", "conference assistant", "SMS service", "event Q&A", "Coachella"],
  authors: [{ name: "EventGuide.ai Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6C63FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
