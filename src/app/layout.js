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
        url: '/basic-logo-square.png',
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
    images: ['/basic-logo-square.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Genesis Water Co",
              "description":
                "Genesis Water Company elevates process innovation while conserving resources for a healthier and more sustainable future.",
              "url": "https://www.genesiswaterco.com/",
              "logo": "https://www.genesiswaterco.com/basic-logo-square.png",
              "image": "https://www.genesiswaterco.com/basic-logo-square.png",
              "telephone": "+1-903-505-2170",
              "email": "ccoe@genesiswaterco.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melissa",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "founder": "Clayton Coe",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-903-505-2170",
                "contactType": "Customer Service"
              },
              "sameAs": []
            }),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Genesis Water Co",
              "url": "https://www.genesiswaterco.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.genesiswaterco.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Water Treatment & Process Optimization",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Genesis Water Co"
              },
              "areaServed": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "TX",
                  "addressCountry": "US"
                }
              }
            }),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Genesis Water Co",
              "url": "https://www.genesiswaterco.com",
              "logo": "https://www.genesiswaterco.com/basic-logo-square.png",
              "description": "At Genesis Water Company we are elevating process innovation while conserving resources for a healthier and more sustainable future.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melissa",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-903-505-2170",
                "contactType": "Customer Service",
                "email": "ccoe@genesiswaterco.com"
              },
              "sameAs": []
            }),
          }}
        />
      </head>
      <body
      // className={`${carlito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
