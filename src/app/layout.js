"use client"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import User from "./pages/User";
import "./globals.css";
import { usePathname } from "next/navigation"; // Import usePathname to get current pathname

// export const metadata = {
//   title: "Smm Panel",
//   description: "Created By Mustansar Hussain",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  // Conditionally render Navbar and User based on pathname
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        {/* Render Navbar and User components only if not on /admin */}
        {!isAdminPage && <Navbar />}
        {!isAdminPage && <User />}


        {children}

        {!isAdminPage && <Footer />}

      </body>
    </html>
  );
}
