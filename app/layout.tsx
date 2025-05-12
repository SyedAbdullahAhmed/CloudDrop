import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import "../styles/globals.css";
import { CloudUpload } from "lucide-react";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300','400', '500', '600', '700'],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cloud Drop",
  description: "Secure cloud storage for your images, powered by ImageKit",
  icons: {
    icon: '/cloud-upload-svgrepo-com.svg', // The icon to be displayed on the Chrome tab
    shortcut: '/cloud-upload-svgrepo-com.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
