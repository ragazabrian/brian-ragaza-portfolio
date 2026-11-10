import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MetaLab × Brian Ragaza | We Make Interfaces",
  description:
    "Metalab helps some of the world's top companies — like Slack, Google, Robinhood, and Midjourney — design, build, and ship amazing digital products and brands. Portfolio recreation by Brian Ragaza.",
  openGraph: {
    title: "MetaLab × Brian Ragaza | We Make Interfaces",
    description: "Product design, engineering, and branding for the world's most ambitious tech companies.",
    url: "https://github.com/ragazabrian/brian-ragaza-portfolio",
    siteName: "MetaLab Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white min-h-screen flex flex-col selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
