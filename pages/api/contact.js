import nodemailer from "nodemailer"

const email = async (req, res) => {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: `${name} a enviado un nuevo correo electrónico`,
      html: `<p>Tu tienes un nuevo correo desde tu pagina web<p><br>
        <p><strong>Nombre: <strong>${name}</strong></strong></p>
        <p><strong>Correo electrónico: <strong>${email}</strong></strong></p>
        <p><strong>Mensaje: <strong>${message}</strong></strong></p>
           `,
    })
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || error.toString(), status: 500 })
  }
  console.log(req)
  return res.status(200).json({ error: "", status: 200 })
}

export default email
