import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/app/components/Navbar";
import VerificationStatus from "./components/VerificationStatus";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lookym App",
  description: "Made by lookym.dev",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html className="dark" lang="en">
      <body className={inter.className}>
        <Providers>
          <VerificationStatus
            visible={session && !session?.user.verified ? true : false}
          />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
