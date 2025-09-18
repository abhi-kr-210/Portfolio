import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // await transporter.sendMail({
    //   from: body.mail, 
    //   to: process.env.GMAIL_USER,
    //   subject: "New Contact Form Message",
    //   text: `From: ${body.name}, Email: ${body.mail}, Number: ${body.number}, Message: ${body.message}`,
    // });
        await transporter.sendMail({
          from: body.mail,
          to: process.env.GMAIL_USER,
          subject: "📩 New Contact Form Message",
          html: `
            <h2>📩 New Contact Form Message</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.mail}</p>
            <p><strong>Number:</strong> ${body.number}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left: 4px solid #9a75ea; padding-left: 10px; color: #333;">
              ${body.message}
            </blockquote>
            <hr/>
            <small style="color: gray;">This email was sent via your portfolio website.</small>
          `,
        });


    return NextResponse.json({ success: true, message: "Email sent with Nodemailer!" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
