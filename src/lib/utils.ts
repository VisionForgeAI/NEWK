import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sendWebhook(data: any) {
  try {
    const response = await fetch('https://hook.eu1.make.com/YOUR_WEBHOOK_HERE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: window.location.href
      })
    });

    if (!response.ok) {
      throw new Error('Webhook failed');
    }

    return true;
  } catch (error) {
    console.error('Webhook error:', error);
    return false;
  }
}