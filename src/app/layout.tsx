import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { personalData } from "@/data/data";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const fontSans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(personalData.url),
  icons: {
    icon: [{ url: "/tab.jpg", type: "image/jpeg", sizes: "any" }],
    shortcut: "/tab.jpg",
    apple: "/tab.jpg",
  },
  title: {
    default: `${personalData.name} | ${personalData.siteTitle}`,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.description,
  openGraph: {
    title: `${personalData.name}`,
    description: personalData.description,
    url: personalData.url,
    siteName: `${personalData.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${personalData.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="flex min-h-[100dvh] flex-col">
              <div className="flex-1">{children}</div>
              <footer className="shrink-0 pb-24 pt-10 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Zhihao Zhang
              </footer>
            </div>
            <Toaster position="top-right" />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
