import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#f6f9fc' }}>
        <Container style={{ margin: '0 auto', padding: '20px 0 48px' }}>
          <Heading style={{ fontSize: '24px', marginBottom: '16px' }}>
            New Contact Form Submission
          </Heading>
          <Section style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px' }}>
            <Text style={{ margin: '0 0 12px' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ margin: '0 0 12px' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ margin: '0 0 12px' }}>
              <strong>Message:</strong>
            </Text>
            <Text style={{ margin: '0', whiteSpace: 'pre-wrap' }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
