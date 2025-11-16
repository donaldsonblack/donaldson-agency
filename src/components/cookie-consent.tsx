"use client";

import CookieConsent from "react-cookie-consent";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function CookieConsentBanner() {
  const handleAccept = () => {
    // Grant consent for all tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
    console.log("Cookies accepted - tracking enabled");
  };

  const handleDecline = () => {
    // Deny consent for all tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
    console.log("Cookies declined - tracking disabled");
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All Cookies"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="donaldson-agency-cookie-consent"
      style={{
        background: "rgba(255, 255, 255, 0.5)",
        borderTop: "1px solid hsl(var(--border))",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
      }}
      buttonStyle={{
        background: "#22c55e",
        color: "#ffffff",
        fontSize: "14px",
        borderRadius: "0.5rem",
        padding: "10px 20px",
        fontWeight: "600",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#000000",
        fontSize: "14px",
        borderRadius: "0.5rem",
        padding: "10px 20px",
        border: "1px solid #000000",
      }}
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      <div style={{ fontSize: "14px", color: "#000000" }}>
        <p style={{ marginBottom: "8px", fontWeight: "500", color: "#000000" }}>
          We value your privacy
        </p>
        <p style={{ margin: 0, opacity: 0.9, color: "#000000" }}>
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking "Accept All
          Cookies", you consent to our use of cookies for analytics and
          advertising.
        </p>
      </div>
    </CookieConsent>
  );
}
