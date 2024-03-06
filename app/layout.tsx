import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import { Providers } from "./providers";
import { PythonProvider } from 'react-py'

import Navbar from "@/app/components/Navbar";
import LargeWithLogoCentered from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ToyPark',
  description: 'Learning data science from scratch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          {children}
           <LargeWithLogoCentered/>
        </Providers>
      </body>
    </html>
  );
}
