import { Poppins, Righteous } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "CampusAppleJuice | Fresh Energy for Students",
  description: "The ultimate apple juice experience for campus life. Pure, fresh, and delivered fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${righteous.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
