import type { Metadata } from "next";
import "./globals.css";
import MetaLabHeader from "@/components/MetaLabHeader";

export const metadata: Metadata = {
  title: "Metalab | We make interfaces",
  description:
    "Metalab helps some of the world's top companies — like Slack and Google — design, build, and ship amazing digital products and brands.",
  openGraph: {
    title: "Metalab | We make interfaces",
    description:
      "Metalab helps some of the world's top companies — like Slack and Google — design, build, and ship amazing digital products and brands.",
    url: "https://www.metalab.com",
    siteName: "Metalab",
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
    <html lang="en" className="dark bg-black">
      <body className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
        <MetaLabHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
