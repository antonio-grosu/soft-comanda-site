import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Software Company",
  description: "Get your own software today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins">
        <Navbar />
        <div className="px-8 md:px-32 2xl:px-64">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
