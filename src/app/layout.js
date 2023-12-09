import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({ weight: ['300', '400', '500', '600', '700'], subsets: ["latin"] });

export const metadata = {
  title: "Tia Niandari",
  description: "Hii, i'am Tia Niandari. and this is my web portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-color-black`}>
        <Navbar font={quicksand} />
        {children}
      </body>
    </html>
  );
}
