import { Quicksand } from "next/font/google";
import "./globals.css";
import "wowjs/css/libs/animate.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
      </body>
    </html>
  );
}
