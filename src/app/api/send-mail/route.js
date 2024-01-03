import mailConfig from "@/libs/mail";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  const body = await req.json();
  const { name, email, message } = body;

  // create nodemail transport
  const transporter = nodemailer.createTransport(mailConfig);

  // template email view
  const view = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            background-color: #171717;
            color: #d8d8d8;
            font-family: "Montserrat", sans-serif;
            padding: 1em;
          }
        </style>
      </head>
      <body>
        <h1>New Message From ${email}</h1>
        <p>The following information was submitted:</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <p>${message}</p>
      </body>
    </html>
    `;

  const viewTxt = `
    New Message From ${email}
    The following information was submitted:
    Name: ${name}
    Email: ${email}
    Message:
    ${message}  
    `;

  try {
    await transporter
    .sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_TO_EMAIL,
      subject: `New Message from ${email}`,
      text: viewTxt,
      html: view,
    })

    return NextResponse.json(
      { message: "Successfully sending." },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
