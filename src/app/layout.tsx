import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";

import { AmbientAudioControl } from "@/components/AmbientAudioControl";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/utils";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.baseUrl,
    images: [
      {
        url: siteConfig.profileImage,
        width: 1200,
        height: 630,
        alt: `Portrait of ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.profileImage],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  image: `${siteConfig.baseUrl}${siteConfig.profileImage}`,
  url: siteConfig.baseUrl,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "Indonesia",
  },
  sameAs: [siteConfig.linkedin, siteConfig.instagram, siteConfig.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${bebas.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="page-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AmbientAudioControl />
        </div>
      </body>
    </html>
  );
}
