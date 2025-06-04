import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "AJC DroneWorks",
  description: "Aerial Drone Photography & Videography",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen bg-white text-gray-900">
        <Navbar />
        {children}

        {/* Floating Contact Button */}
        <Link
          href="/contact"
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition z-50 text-sm sm:text-base font-semibold"
        >
          Contact Us
        </Link>
      </body>
    </html>
  );
}
