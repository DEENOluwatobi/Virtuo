"use client";
import React from 'react';
import { Inter } from "next/font/google";
import "../../styles/index.css";
import { Providers } from "../providers";
import Header from "@app/features/AdminDashboard/components/Header";
import SideNav from "@app/features/AdminDashboard/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
          <Providers>
            <div className="w-full">
              <Header/>
            </div>
            <div className="w-full h-full grid grid-cols-11">
              <div className="col-span-2">
                <SideNav/>
              </div>
              <div className="col-span-9 w-full h-[calc(100vh-70px)] overflow-y-scroll">
                {children}
              </div>
            </div>
          </Providers>
      </body>
    </html>
  );
}
