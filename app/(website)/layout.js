import Footer from "./Components/Utils/Footer";
import Navbar from "./Components/Utils/Navbar";
import { maliFont } from "./Components/Utils/font";

import State from "../Context/State";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${maliFont.className}`}>
        <State>
          <Navbar />
          {children}
          <Footer />
        </State>
      </body>
    </html>
  );
}
