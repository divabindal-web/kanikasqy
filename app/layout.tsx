import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kanikaguptashori.com"),
  title: "Kanika Gupta Shori — Co-Founder & COO at Square Yards",
  description:
    "Kanika Gupta Shori, COO and Co-Founder of Square Yards, honored as Woman Entrepreneur of the Year. Her visionary leadership is reshaping real estate with innovation and empowerment.",
  alternates: {
    canonical: "https://www.kanikaguptashori.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.kanikaguptashori.com",
    siteName: "Kanika Gupta Shori",
    title: "Kanika Gupta Shori — Co-Founder & COO at Square Yards",
    description:
      "Co-Founder & COO of Square Yards. Reshaping real estate through technology, transparency, and women-led leadership.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
