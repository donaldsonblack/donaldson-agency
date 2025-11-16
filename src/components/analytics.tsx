"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function Analytics() {
  const measurementId = "G-SXX8QKDWQ0";
  const adsConversionId = "AW-17729509807";

  useEffect(() => {
    // Check for cookie consent
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("donaldson-agency-cookie-consent="));

    if (consent && window.gtag) {
      const consentValue = consent.split("=")[1];

      // Update consent mode based on user choice
      window.gtag("consent", "update", {
        analytics_storage: consentValue === "true" ? "granted" : "denied",
        ad_storage: consentValue === "true" ? "granted" : "denied",
        ad_user_data: consentValue === "true" ? "granted" : "denied",
        ad_personalization: consentValue === "true" ? "granted" : "denied",
      });
    }
  }, []);

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

          // Set default consent mode (denied until user accepts)
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });

          // Configure Google Analytics 4 with enhanced measurement
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            send_page_view: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true,
          });

          // Configure Google Ads with conversion linker
          gtag('config', '${adsConversionId}', {
            allow_enhanced_conversions: true
          });

          // Enable remarketing and advertising features
          gtag('set', 'allow_ad_personalization_signals', true);
        `}
      </Script>
    </>
  );
}
