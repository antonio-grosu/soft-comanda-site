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
      <body className="poppins bg-teal-500">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
