import "./globals.css";
import { Carlito } from 'next/font/google';

const carlito = Carlito({
  subsets: ['latin'],
  weight: ['400', '700'], // normal and bold
});

export const metadata = {
  title: "Genesis Water Company",
  description: "At Genesis Water Company we are elevating process innovation while conserving resources for a healthier and more sustainable future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${carlito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
