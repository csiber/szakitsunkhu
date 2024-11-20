export const emailConfig = {
  host: import.meta.env.VITE_SMTP_HOST || 'smtp.example.com',
  port: parseInt(import.meta.env.VITE_SMTP_PORT || '587', 10),
  secure: import.meta.env.VITE_SMTP_SECURE === 'true',
  auth: {
    user: import.meta.env.VITE_SMTP_USER || '',
    pass: import.meta.env.VITE_SMTP_PASS || ''
  },
  from: import.meta.env.VITE_SMTP_FROM || 'noreply@szakitsunk.hu'
};