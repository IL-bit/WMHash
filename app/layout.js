import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./sections1-3.css";
import "./sections4-6.css";
import '../public/fonts/fonts.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "WildMiner Hash",
  description: "WildMiner Hash is a unique game blending gaming and token mining. We've crafted a space where every player can enjoy the process and earn tangible rewards.",
  keywords: "WildMiner Hash, gaming, token mining, rewards, unique game",
  ogTitle: "WildMiner Hash"
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
