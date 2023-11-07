import { maliFont } from "../(website)/Components/Utils/font";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${maliFont.className}`}>{children}</body>
    </html>
  );
}
