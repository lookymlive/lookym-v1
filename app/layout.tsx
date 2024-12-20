import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/app/providers";
import Navbar from "@/app/components/Navbar";
import VerificationStatus from "@/app/components/VerificationStatus";
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
  const showVerification = session && !session.user.verified;

  return (
    <html className="dark" lang="en">
      <body className={inter.className}>
        <Providers>
          {showVerification && (
            <VerificationStatus visible={showVerification} />
          )}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
