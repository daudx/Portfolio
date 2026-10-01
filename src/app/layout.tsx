import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Exactly 2 web font families loaded via next/font with display: swap
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" }
  ],
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.seo.description,
  authors: [{ name: siteConfig.name, url: siteConfig.github.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.seo.siteUrl
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/avatar.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    creator: "@daudx"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced JSON-LD Person schema matching specification
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bahria University Islamabad"
    },
    url: siteConfig.seo.siteUrl,
    sameAs: [siteConfig.github.url, siteConfig.linkedin.url],
    description: siteConfig.seo.description,
    knowsAbout: [
      "Artificial Intelligence",
      "Retrieval-Augmented Generation (RAG)",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "TypeScript",
      "Python"
    ]
  };

  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable} dark`} 
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash theme initializer script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})();`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#F6F4EF] dark:bg-[#0A0A0A] text-[#121212] dark:text-[#F6F4EF] font-sans selection:bg-[#D96C3A] selection:text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
