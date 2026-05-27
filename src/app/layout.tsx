import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finding_Peace29 | Animal Rescue NGO in Rajasthan",
  description: "Finding_Peace29 is a dedicated animal rescue NGO in Jaitsar, Rajasthan, rescuing and treating stray, injured, and abandoned animals for over 5 years. Every life matters.",
  keywords: ["Animal rescue NGO Rajasthan", "Stray animal help Jaitsar", "Cow rescue Rajasthan", "Dog rescue NGO India", "Animal welfare NGO Rajasthan", "Injured animal rescue near me"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
