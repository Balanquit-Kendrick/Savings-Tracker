import { AppSidebar } from '@/components/app-sidebar';
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from 'next';
import "../app/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savings Tracker",
  description: "Daily Savings Tracker",
};

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}