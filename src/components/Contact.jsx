import { useState,useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import {useForm,ValidationError} from '@formspree/react'

const SOCIALS = [
  {
    label: 'Facebook',
    url:   'https://www.facebook.com/profile.php?id=61577683704152',
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    url:   'https://www.instagram.com/xbrocoder/',
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    url:   'https://github.com/xbroindia',
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
]

export default function Contact() {
  const titleRef = useReveal()
  const cardRef  = useReveal()

  const [form,    setForm]    = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  const [state,handleSubmit] = useForm("mrbkkrae")

useEffect(() => {
  if(state.succeeded){
   setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }
  }, [state.succeeded,state.submitting]);
 

  return (
    <section id="contact" className="py-32 px-16 max-w-[700px] mx-auto text-center">
      {/* Section label */}
      <div className="flex items-center justify-center gap-3 text-[11px] tracking-[0.15em] uppercase text-accent mb-6">
        <span className="block w-8 h-px bg-accent" />
        Get in touch
        <span className="block w-8 h-px bg-accent" />
      </div>

      <h2
        ref={titleRef}
        className="reveal font-syne font-extrabold leading-[1.15] mb-2"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Let's work together.
      </h2>

      {/* Card */}
      <div
        ref={cardRef}
        className="reveal relative bg-bg3 border border-[rgba(255,255,255,0.07)] rounded-3xl p-14 mt-12 overflow-hidden"
      >
        {/* Glow */}
        <span
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)' }}
        />

        <p className="text-muted leading-[1.75] mb-10 text-[1.05rem]">
          Have a project in mind or want to collaborate? I'm always open to new opportunities. Drop me a message!
        </p>

          <form 
              onSubmit={handleSubmit} className="text-left space-y-5">
          {/* Name */}
          <div>
            <label className="block text-[12px] tracking-[0.08em] uppercase text-muted mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-white/[0.04] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-[15px] text-[#f0eff8] font-outfit outline-none transition-all duration-200 focus:border-[rgba(108,99,255,0.5)] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] placeholder:text-muted"
            />
             <ValidationError prefix="Message" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[12px] tracking-[0.08em] uppercase text-muted mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full bg-white/[0.04] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-[15px] text-[#f0eff8] font-outfit outline-none transition-all duration-200 focus:border-[rgba(108,99,255,0.5)] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] placeholder:text-muted"
            />
            <ValidationError prefix="Message" field="email" errors={state.errors} />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[12px] tracking-[0.08em] uppercase text-muted mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="w-full bg-white/[0.04] border border-[rgba(255,255,255,0.07)] rounded-xl px-4 py-3 text-[15px] text-[#f0eff8] font-outfit outline-none transition-all duration-200 focus:border-[rgba(108,99,255,0.5)] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] placeholder:text-muted resize-y min-h-[120px]"
            />
             <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full text-white py-4 rounded-xl text-[16px] font-medium mt-2 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: success
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #6c63ff, #00d4ff)',
            }}
          >
            {success ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </form>

        {/* Socials */}
        <div className="flex justify-center gap-4 mt-8">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              title={s.label}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] text-muted transition-all duration-200 hover:border-[rgba(108,99,255,0.5)] hover:text-accent2 hover:-translate-y-1"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
