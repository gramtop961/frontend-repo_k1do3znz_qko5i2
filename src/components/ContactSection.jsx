import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thank you! We will get back to you shortly.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Get In Touch</h2>
            <p className="text-slate-600 mt-2 max-w-xl">Wholesale orders, chef partnerships, or home delivery—drop us a note and we’ll follow up within one business day.</p>

            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 012-3456</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@crabfarm.co</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 128 Shoreline Rd, Harborview</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-lg border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Tell us about your needs" />
            </div>
            <button type="submit" className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-3 rounded-xl transition">Send Message</button>
            {status && <p className="mt-3 text-sm text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
