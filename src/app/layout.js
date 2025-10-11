import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: "Rutgers VIP - Venture Investor Program",
  description: "A 12-week student-run venture sourcing program connecting Rutgers students with top VC firms. Gain hands-on experience in venture capital through sourcing, analysis, and pitching to real investors.",
  keywords: "Rutgers, VIP, Venture Capital, VC, Investment, Student Program, Venture Investor Program",
  authors: [{ name: "Rutgers Venture Capital Club" }],
  openGraph: {
    title: "Rutgers VIP - Venture Investor Program",
    description: "Join Rutgers' premier venture capital training program",
    url: "https://rutgersvip.com",
    siteName: "Rutgers VIP",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
