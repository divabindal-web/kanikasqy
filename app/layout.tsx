import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kanikaguptashori.com"),
  title: "Kanika Gupta Shori | Co-Founder & COO at Square Yards",
  description:
    "Kanika Gupta Shori, COO and Co-Founder of Square Yards, honored as Woman Entrepreneur of the Year. Her visionary leadership is reshaping real estate with innovation and empowerment.",
  alternates: { canonical: "https://www.kanikaguptashori.com" },
  openGraph: {
    type: "website",
    url: "https://www.kanikaguptashori.com",
    siteName: "Kanika Gupta Shori",
    title: "Kanika Gupta Shori | Co-Founder & COO at Square Yards",
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
    <html
      lang="en"
      style={
        {
          "--font-playfair": "'Fraunces', Georgia, serif",
          "--font-inter": "'Inter', system-ui, sans-serif",
        } as React.CSSProperties
      }
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
