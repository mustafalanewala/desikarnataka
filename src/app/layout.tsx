import type { Metadata } from "next";
import { Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const kannadaFont = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kannada",
});

export const metadata: Metadata = {
  title: "Desi Karnataka",
  description:
    "Desi Karnataka is your go-to source for the latest news and updates in Karnataka. Stay informed with our comprehensive coverage of local news, politics, culture, and more in Kannada.",
  keywords: "Karnataka, news, local news, Kannada, politics, culture, updates",
  authors: [{ name: "Desi Karnataka Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn" className={kannadaFont.variable}>
      <body className="font-sans antialiased bg-white/50">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
