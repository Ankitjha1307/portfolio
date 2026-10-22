import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Jha — Full-Stack Developer",
  description:
    "Portfolio of Ankit Jha, a full-stack developer building fast, accessible web experiences with React, Next.js, and TypeScript.",
  keywords: [
    "Ankit Jha",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ankit Jha" }],
  creator: "Ankit Jha",
  openGraph: {
    type: "website",
    title: "Ankit Jha — Full-Stack Developer",
    description:
      "Portfolio of Ankit Jha, a full-stack developer building fast, accessible web experiences with React, Next.js, and TypeScript.",
    siteName: "Ankit Jha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Jha — Full-Stack Developer",
    description:
      "Portfolio of Ankit Jha, a full-stack developer building fast, accessible web experiences with React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
