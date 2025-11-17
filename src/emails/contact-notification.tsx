import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  company,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f6f9fc" }}>
        <Container
          style={{
            margin: "0 auto",
            padding: "20px 0 48px",
            maxWidth: "600px",
          }}
        >
          <Heading
            style={{ fontSize: "24px", marginBottom: "16px", color: "#1a1a1a" }}
          >
            New Contact Form Submission
          </Heading>
          <Section
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
          >
            <Text style={{ margin: "0 0 12px", fontSize: "16px" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ margin: "0 0 12px", fontSize: "16px" }}>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} style={{ color: "#2563eb" }}>
                {email}
              </a>
            </Text>
            {phone && (
              <Text style={{ margin: "0 0 12px", fontSize: "16px" }}>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${phone}`} style={{ color: "#2563eb" }}>
                  {phone}
                </a>
              </Text>
            )}
            {company && (
              <Text style={{ margin: "0 0 12px", fontSize: "16px" }}>
                <strong>Company:</strong> {company}
              </Text>
            )}
            <Text style={{ margin: "16px 0 8px", fontSize: "16px" }}>
              <strong>Message:</strong>
            </Text>
            <Text
              style={{
                margin: "0",
                whiteSpace: "pre-wrap",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              {message}
            </Text>
          </Section>
          <Text
            style={{
              margin: "16px 0 0",
              fontSize: "12px",
              color: "#6b7280",
              textAlign: "center",
            }}
          >
            This message was sent from the Donaldson Agency contact form
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
