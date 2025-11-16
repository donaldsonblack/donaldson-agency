/**
 * Analytics tracking utilities for Google Analytics and Google Ads
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-SXX8QKDWQ0";
export const ADS_CONVERSION_ID = "AW-17729509807";

// Google Ads Conversion Labels
// Get these from your Google Ads account after creating conversion actions
// See GOOGLE-ADS-SETUP.md for instructions
export const CONVERSION_LABELS = {
  CONTACT_FORM:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL || "not-configured",
  PHONE_CLICK:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL || "not-configured",
  EMAIL_CLICK:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL || "not-configured",
};

/**
 * Track a pageview event
 */
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, eventParams);
  }
};

/**
 * Track Google Ads conversion
 */
export const trackConversion = (
  conversionLabel: string,
  value?: number,
  transactionId?: string
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: `${ADS_CONVERSION_ID}/${conversionLabel}`,
      value: value || 0,
      currency: "USD",
      transaction_id: transactionId || "",
    });
  }
};

/**
 * Track enhanced conversion with user data (for GDPR compliance, only after consent)
 */
export const trackEnhancedConversion = (
  conversionLabel: string,
  userData: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    address?: {
      street?: string;
      city?: string;
      region?: string;
      postalCode?: string;
      country?: string;
    };
  },
  value?: number
) => {
  if (typeof window.gtag !== "undefined") {
    // Hash user data for privacy (Google will handle this, but we can pre-hash)
    const enhancedConversionData: Record<string, any> = {};

    if (userData.email) {
      enhancedConversionData.email = userData.email.toLowerCase().trim();
    }
    if (userData.phone) {
      enhancedConversionData.phone_number = userData.phone;
    }
    if (userData.firstName) {
      enhancedConversionData.first_name = userData.firstName.toLowerCase();
    }
    if (userData.lastName) {
      enhancedConversionData.last_name = userData.lastName.toLowerCase();
    }
    if (userData.address) {
      enhancedConversionData.address = {
        first_name: userData.firstName?.toLowerCase(),
        last_name: userData.lastName?.toLowerCase(),
        street: userData.address.street,
        city: userData.address.city,
        region: userData.address.region,
        postal_code: userData.address.postalCode,
        country: userData.address.country,
      };
    }

    window.gtag("event", "conversion", {
      send_to: `${ADS_CONVERSION_ID}/${conversionLabel}`,
      value: value || 0,
      currency: "USD",
      // @ts-ignore - enhanced_conversion_data is valid but not in types
      enhanced_conversion_data: enhancedConversionData,
    });
  }
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmission = (
  formData: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
  },
  value = 100 // Default lead value
) => {
  // Track as GA4 event
  trackEvent("generate_lead", {
    event_category: "engagement",
    event_label: "Contact Form Submission",
    value: value,
    currency: "USD",
  });

  // Track as Google Ads conversion with enhanced data
  const [firstName, ...lastNameParts] = formData.name.split(" ");
  const lastName = lastNameParts.join(" ");

  trackEnhancedConversion(
    CONVERSION_LABELS.CONTACT_FORM,
    {
      email: formData.email,
      phone: formData.phone,
      firstName: firstName,
      lastName: lastName,
    },
    value
  );
};

/**
 * Track button/link clicks
 */
export const trackClick = (
  elementName: string,
  elementType: string,
  destination?: string
) => {
  trackEvent("click", {
    event_category: "engagement",
    event_label: elementName,
    element_type: elementType,
    destination: destination,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll", {
    event_category: "engagement",
    event_label: `Scrolled ${depth}%`,
    value: depth,
  });
};

/**
 * Track outbound link clicks
 */
export const trackOutboundLink = (url: string) => {
  trackEvent("click", {
    event_category: "outbound",
    event_label: url,
    transport_type: "beacon",
  });
};

/**
 * Track file downloads
 */
export const trackFileDownload = (fileName: string) => {
  trackEvent("file_download", {
    event_category: "engagement",
    event_label: fileName,
  });
};

/**
 * Track video plays (if you add video content)
 */
export const trackVideoPlay = (videoTitle: string, videoUrl?: string) => {
  trackEvent("video_start", {
    event_category: "engagement",
    event_label: videoTitle,
    video_url: videoUrl,
  });
};

/**
 * Track phone number clicks
 */
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent("phone_click", {
    event_category: "engagement",
    event_label: phoneNumber,
  });

  // Track as Google Ads conversion (only if configured)
  if (CONVERSION_LABELS.PHONE_CLICK !== "not-configured") {
    trackConversion(CONVERSION_LABELS.PHONE_CLICK, 50);
  }
};

/**
 * Track email clicks
 */
export const trackEmailClick = (emailAddress: string) => {
  trackEvent("email_click", {
    event_category: "engagement",
    event_label: emailAddress,
  });

  // Track as Google Ads conversion (only if configured)
  if (CONVERSION_LABELS.EMAIL_CLICK !== "not-configured") {
    trackConversion(CONVERSION_LABELS.EMAIL_CLICK, 50);
  }
};
