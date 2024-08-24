import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Analytics } from "@/components/analytics";
import { cn } from "@/lib/server-utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { GlobalProvider } from "@/context/global";

const fontSans = FontSans({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Banking", "Fin-tech", "Payment"],
  authors: [
    {
      name: "Daramola Olorunfemi",
      url: "https://github.com/berryboylb",
    },
  ],
  creator: "Daramola Olorunfemi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@pappychulow",
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlobalProvider>
            {children}
            <Toaster />
            <Analytics />
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
