import mail from '@sendgrid/mail';
import { NextResponse } from 'next/server';



mail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  const body = await request.json()

  const message = `
    First Name: ${body.name}\r\n
    Last Name: ${body.lastName}\r\n
    Phone Number: ${body.phoneNumber}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  const data = {
    to: `ga.damasin@gmail.com`,
    from: `${body.email}`,
    subject: 'Contact Support DSAP',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  try {
    await mail.send(data);
    return NextResponse.json({message: "Your message was sent. I'll be in contact shortly.",})
  } catch (error) {
    return NextResponse.json({ error: error})
  }
}
