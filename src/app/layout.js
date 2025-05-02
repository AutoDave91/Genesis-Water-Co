import "./globals.css";
// import { Carlito } from 'next/font/google';
import { Oswald, Open_Sans } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// const carlito = Carlito({
//   subsets: ['latin'],
//   weight: ['400', '700'], // normal and bold
// });
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
})

export const metadata = {
  title: "Genesis Water Company",
  description: "At Genesis Water Company we are elevating process innovation while conserving resources for a healthier and more sustainable future.",
  openGraph: {
    title: 'Genesis Water Co',
    description: 'Pure Water, Pure Innovation',
    url: 'https://genesiswaterco.com/',
    siteName: 'Genesis Water Co',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Genesis Water Co Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genesis Water Co',
    description: 'Pure Water, Pure Innovation',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body
      // className={`${carlito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
