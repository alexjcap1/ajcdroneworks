import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Import Navbar

export const metadata = {
  title: "AJC DroneWorks",
  description: "Aerial Drone Photography & Videography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
