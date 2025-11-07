import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Chef Lina Ortega',
    role: 'Executive Chef, Tidal House',
    quote: 'The sweetest crab we have ever served. Reliable quality and stellar service week after week.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus & Co. Seafood',
    role: 'Distributor Partner',
    quote: 'Traceability and freshness we can trust. Our clients love the consistency.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sofia Park',
    role: 'Home Cook',
    quote: 'Ordered for a family boil—arrived cold, clean, and unbelievably tasty!',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center">What Our Customers Say</h2>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto text-center">Real words from chefs, partners, and home cooks.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
              <Stars count={t.rating} />
              <p className="mt-4 text-slate-800">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
