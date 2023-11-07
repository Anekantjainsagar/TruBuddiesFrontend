import { maliFont, noto_sans } from "../(website)/Components/Utils/font";
import Navbar from "./Components/Navbar";
import State from "../Context/State";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className}`}>
        <State>
          <div className="flex items-center justify-between">
            <Navbar />
            <div className="w-[82vw]">{children}</div>
          </div>
        </State>
      </body>
    </html>
  );
}
