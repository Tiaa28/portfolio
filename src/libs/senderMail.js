import { NextResponse } from "next/server";

const sendedEmail = async ({ name, email, message }) => {
  if (!name || !email || !message) {
    return NextResponse.json({
      ok: false,
      message: "Something went wrong!",
    });
  }
  
  const response = await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export default sendedEmail;
