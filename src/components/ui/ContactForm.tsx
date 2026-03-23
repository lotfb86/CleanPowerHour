"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `mailto:tim@cleanpowerhour.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      }}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-charcoal)] mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-newsreader)] text-base placeholder:text-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent transition-shadow duration-200"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-charcoal)] mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-newsreader)] text-base placeholder:text-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent transition-shadow duration-200"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block font-[family-name:var(--font-outfit)] text-sm font-semibold text-[var(--color-charcoal)] mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[var(--bg-slate)] bg-white text-[var(--color-charcoal)] font-[family-name:var(--font-newsreader)] text-base placeholder:text-[var(--color-mist)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-deep)] focus:border-transparent transition-shadow duration-200 resize-vertical"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-solar-deep)] text-white text-base font-[family-name:var(--font-outfit)] font-bold rounded-xl hover:bg-[var(--color-solar)] transition-all duration-300 shadow-lg shadow-[var(--color-solar-deep)]/25"
      >
        Send Message
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  );
}
