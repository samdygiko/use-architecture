import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
});

const SITE_URL = "https://use-architecture.vercel.app";
const TITLE = "USE•Architecture";
const DESC =
  "USE•Architecture — a small London architecture practice led by JH Hagan. Work, rest and play.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s — USE•Architecture" },
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: TITLE,
    type: "website",
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={newsreader.variable}>
      <body className="bg-white text-ink">
        <Header />
        <div className="pt-[60px] md:pt-[72px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
