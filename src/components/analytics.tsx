"use client";

import Script from "next/script";

export function Analytics() {
  // Access environment variable at build time (embedded in the bundle)
  const measurementId = "G-SXX8QKDWQ0";
  const adsConversionId = "AW-17729509807";

  return (
    <>
      {/* Load Google Tag Manager script for both GA4 and Google Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adsConversionId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Configure Google Analytics 4
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });

          // Configure Google Ads
          gtag('config', '${adsConversionId}');
        `}
      </Script>
    </>
  );
}
