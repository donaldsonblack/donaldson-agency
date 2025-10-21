'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    });

    setIsSubmitting(false);

    if (result.success) {
      setMessage({ type: 'success', text: 'Thank you! We\'ll be in touch soon.' });
      e.currentTarget.reset();
    } else {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {message && (
        <p className={message.type === 'success' ? 'text-green-600' : 'text-red-600'}>
          {message.text}
        </p>
      )}
    </form>
  );
}
