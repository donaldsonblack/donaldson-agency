'use server';

import { Resend } from 'resend';
import { db } from '@/lib/db/client';
import { contacts } from '@/lib/db/schema';
import ContactNotification from '@/emails/contact-notification';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    // Save to database
    await db.insert(contacts).values({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New contact from ${formData.name}`,
      react: ContactNotification({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}
