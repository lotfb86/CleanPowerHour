import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  alternates: {
    types: {
      "application/rss+xml": "/blog/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Outfit:wght@400;500;600;700;800&display=swap"
        />
      </head>
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
