import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// ----------- Poppins &&& Raleway && Pacifico fonts -----------
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-pacifico",
});

// ----------- Metadata -----------
export const metadata: Metadata = {
  title: "JAYANSHU KIKANI PORTFOLIO",
  description: "Portfolio of JAYANSHU KIKANI",
};

// ----------- RootLayout -----------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} ${pacifico.variable}`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
