import React from 'react';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';

function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-slate-900 tracking-tight text-lg">Harbor Crab Farm</a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#products" className="hover:text-slate-900">Products</a>
          <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#contact" className="ml-2 inline-block bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg">Get a Quote</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">Harbor Crab Farm</h3>
          <p className="text-slate-400 mt-2">Sustainably farmed, ocean-fresh crab. Proudly family-run.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-slate-400">
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#blog" className="hover:text-white">Journal</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="text-slate-400 mt-2">Get seasonal updates and offers.</p>
          <form className="mt-3 flex gap-2">
            <input className="flex-1 rounded-lg border border-slate-700 bg-slate-900 text-slate-100 px-3 py-2" placeholder="you@example.com"/>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Harbor Crab Farm. All rights reserved.</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProductsSection />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
