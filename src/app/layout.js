import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header.js'
import Footer from '@/components/Footer.js'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pantry Sidekick",
  description: "A web application to help organize your pantry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
