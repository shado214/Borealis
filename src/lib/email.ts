import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: EmailParams) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        from_name: name,
        reply_to: email,
        message: message,
        to_email: 'mesbah.sam21@gmail.com',
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    );
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};