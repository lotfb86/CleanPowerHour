import type { Metadata } from "next";
import { Outfit, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clean Power Consulting Group | Cleantech Business Growth Experts",
    template: "%s | Clean Power Consulting Group",
  },
  description:
    "Coaching and consulting for cleantech entrepreneurs and executives. Solar consulting, executive coaching, and the Clean Power Hour podcast with 400+ episodes.",
  metadataBase: new URL("https://cleanpower.group"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Clean Power Consulting Group",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@tgmontague",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${newsreader.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
