import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
app.use(cors({ origin: true }))
app.use(express.json())

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }

  try {
    const useGmail = !process.env.SMTP_HOST && (process.env.SMTP_USER || '').includes('@gmail.com')
    const transportConfig = useGmail
      ? {
          service: 'gmail',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        }
      : {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({ ok: false, error: 'Email server is not configured' })
    }

    const transporter = nodemailer.createTransport(transportConfig)

    const toAddress = process.env.TO_EMAIL || 'sales@iekshawxxxx.com'

    await transporter.sendMail({
      from: `Website Contact <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: toAddress,
      subject: `New inquiry from ${name}`,
      replyTo: email,
      html: `<h2>New Website Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    res.status(500).json({ ok: false, error: process.env.NODE_ENV === 'production' ? 'Failed to send email' : String(err && err.message || err) })
  }
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})


