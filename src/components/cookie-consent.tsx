"use client";

import CookieConsent from "react-cookie-consent";

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="donaldson-agency-cookie-consent"
      style={{
        background: "hsl(var(--card))",
        borderTop: "1px solid hsl(var(--border))",
      }}
      buttonStyle={{
        background: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))",
        fontSize: "14px",
        borderRadius: "0.5rem",
        padding: "8px 16px",
      }}
      declineButtonStyle={{
        background: "hsl(var(--secondary))",
        color: "hsl(var(--secondary-foreground))",
        fontSize: "14px",
        borderRadius: "0.5rem",
        padding: "8px 16px",
      }}
      expires={365}
      onAccept={() => {
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        console.log("Cookies declined");
      }}
    >
      <span style={{ fontSize: "14px" }}>
        This website uses cookies to enhance user experience and analyze site
        traffic.
      </span>
    </CookieConsent>
  );
}
