import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FinalFile from "./FinalFile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamo Notes",
  description: "A simple daily note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FinalFile />
        {/* {children} */}
      </body>
    </html>
  );
}
