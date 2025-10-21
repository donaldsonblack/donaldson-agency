"use server";

import { Resend } from "resend";
import ContactNotification from "@/emails/contact-notification";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  try {
    // TODO: Uncomment when database is set up
    // await db.insert(contacts).values({
    //   name: formData.name,
    //   email: formData.email,
    //   message: formData.message,
    // });

    // Initialize Resend client at runtime (not build time)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New contact from ${formData.name}`,
      react: ContactNotification({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}
