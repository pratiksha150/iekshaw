import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section container">
      <h1>Contact Us</h1>
      <p className="muted">We typically reply within one business day.</p>
      {submitted ? (
        <div className="alert success">Thanks {form.name || 'there'}! We received your message.</div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
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
      )}
    </section>
  )
}

export default Contact


