import React from 'react';
import { Ship, Waves, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-semibold">
              <Waves className="w-4 h-4" />
              Sustainable Coastal Farming
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Ocean-fresh crab, farmed with care.
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg max-w-xl">
              We’re a family-run crab farm bringing premium, traceable seafood from our waters to your table. Fresh harvests, clean practices, and unbeatable flavor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium px-5 py-3 rounded-xl transition">
                Explore Products
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-3 rounded-xl transition">
                Contact Sales
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-700"><Ship className="w-4 h-4"/> Same-day dispatch</div>
              <div className="flex items-center gap-2 text-slate-700"><Leaf className="w-4 h-4"/> Eco-certified feed</div>
              <div className="flex items-center gap-2 text-slate-700"><Waves className="w-4 h-4"/> Zero antibiotics</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-sky-200 via-sky-100 to-emerald-100 shadow-inner flex items-center justify-center">
              <span className="text-8xl md:text-9xl">🦀</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
