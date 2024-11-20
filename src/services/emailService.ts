import { Template } from '../data/templates';

export interface EmailData {
  recipientName: string;
  senderName: string;
  reason: string;
  email: string;
  template: Template;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};