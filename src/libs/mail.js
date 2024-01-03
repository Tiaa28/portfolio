const mailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS
  }
}

export default mailConfig;