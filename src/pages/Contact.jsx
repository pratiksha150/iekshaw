import { useEffect, useRef, useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const nextRef = useRef(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="contact">
      <div className="section container">
        <h1>Contact Us</h1>
        <p className="muted">We typically reply within one business day.</p>
        {sent && (
          <div className="alert success thanks">😊 Thanks{form.name ? `, ${form.name}` : ''}! Your message has been sent. We’ll get back to you shortly.</div>
        )}
        <form
          className="form"
          onSubmit={async (e) => {
            e.preventDefault()
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(form),
            })
            const ok = res.ok
            setSent(ok)
            if (ok) setForm({ name: '', email: '', message: '' })
          }}
        >
            <div className="form__row">
              <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form__row">
              <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form__row">
              <label>Message</label>
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
            </div>
            <button className="btn btn--primary" type="submit">Send Message</button>
          </form>
        <script suppressHydrationWarning>{`/* noop for SSR tools */`}</script>
        {(() => {
          // Detect ?sent=1 and show banner without reloading again
          const params = new URLSearchParams(window.location.search)
          if (params.get('sent') === '1' && !sent) {
            setTimeout(() => setSent(true), 0)
            // Clean URL
            const url = new URL(window.location.href)
            url.searchParams.delete('sent')
            window.history.replaceState({}, '', url)
          }
        })()}
      </div>
    </section>
  )
}

export default Contact


