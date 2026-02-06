import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import { AppProviders } from "@/components/providers/AppProviders";
import { SpeedInsights } from "@vercel/speed-insights/next";

const nohemi = localFont({
  src: [
    { path: "../public/Nohemi/Nohemi/Web-TT/Nohemi-Regular.woff2", weight: "400" },
    { path: "../public/Nohemi/Nohemi/Web-TT/Nohemi-Medium.woff2", weight: "500" },
    { path: "../public/Nohemi/Nohemi/Web-TT/Nohemi-SemiBold.woff2", weight: "600" },
    { path: "../public/Nohemi/Nohemi/Web-TT/Nohemi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: "Pradyumn | UX Portfolio",
  description: "Product Design Portfolio. About, talks, and featured work.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffbf3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nohemi.variable}>
      <body>
        <AppProviders>
          {children}
        </AppProviders>
        <div id="modal-root" aria-hidden="true" />
        <SpeedInsights />
      </body>
    </html>
  );
}
