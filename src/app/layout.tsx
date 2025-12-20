import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "People Performance Advisors | Matthew Hodgson | CEO Advisory",
  description: "Independent advisor to CEOs. Clear the path. Getting organisations out of their own way. Removing conditions that cause capable people to misfire.",
  keywords: "CEO advisor, executive coaching, organisational development, leadership advisory, Brisbane, Matthew Hodgson, People Performance Advisors",
  authors: [{ name: "Matthew Hodgson" }],
  openGraph: {
    title: "People Performance Advisors | Matthew Hodgson",
    description: "Independent advisor to CEOs. Clear the path. Getting organisations out of their own way.",
    url: "https://peopleperformanceadvisors.com.au",
    siteName: "People Performance Advisors",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "People Performance Advisors | Matthew Hodgson",
    description: "Independent advisor to CEOs. Clear the path. Getting organisations out of their own way.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
