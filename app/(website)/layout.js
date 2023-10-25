import Footer from "./Components/Utils/Footer";
import Navbar from "./Components/Utils/Navbar";
import { maliFont } from "./Components/Utils/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${maliFont.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
