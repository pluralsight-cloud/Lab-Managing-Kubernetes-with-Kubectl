import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globomantics",
  description:
    "This site is created for demonstrative purposes only and does not offer any real products or services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/G.png"
        />
      </head>
      <body>
        {children}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script id="globo-hamburger" strategy="afterInteractive">
          {`
(function(){
  function bind(){
    if (typeof window.jQuery === 'undefined') return;
    window.jQuery(document).ready(function(){
      window.jQuery("#hamburger").on("click", function(){
        window.jQuery("header").toggleClass("fixed");
      });
    });
  }
  bind();
})();
          `}
        </Script>
      </body>
    </html>
  );
}
