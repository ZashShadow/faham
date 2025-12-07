import { Roboto } from "next/font/google";
import "./globals.css";



const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Faham Remake",
  description: "IISAT University LMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
