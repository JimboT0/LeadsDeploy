import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

import Footer from '../../components/footer';
import Dropdown from '../../components/dropdown';

import Head from 'next/head';




const inter = Inter({ subsets: ['latin'] })





export const metadata: Metadata = {
  title: 'VintageRiches',
  description: 'Discover hidden treasures in your home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <Head>
        <meta name="facebook-domain-verification" content="mqbbvb086i55o0jg2lh0eqwqp06zh1" />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
                j.setAttribute('SameSite', 'None');//added this
                j.setAttribute('Secure', 'true');//sdded this
                f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer','GTM-MDGXM6DC' );
          `}
      </Script>
      <body>

        <Dropdown />

        <main>{children}</main>


        <Footer />

        <Analytics />

      </body>

    </html>
  )
}
