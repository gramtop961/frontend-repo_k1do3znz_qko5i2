import React from 'react';

const products = [
  {
    id: 1,
    name: 'Atlantic Blue Crab',
    desc: 'Fresh, sustainably farmed blue crabs with sweet, delicate meat.',
    price: '$22 / lb',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Soft-Shell Crab',
    desc: 'Tender and ready-to-fry soft-shell crabs harvested at peak.',
    price: '$28 / lb',
    tag: 'Seasonal',
  },
  {
    id: 3,
    name: 'Jumbo Lump Meat',
    desc: 'Premium hand-picked jumbo lump meat for gourmet dishes.',
    price: '$38 / lb',
    tag: 'Premium',
  },
  {
    id: 4,
    name: 'Crab Stock Pack',
    desc: 'Rich, slow-simmered stock base for soups and sauces.',
    price: '$12 / pack',
    tag: 'Chef Favorite',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Our Products</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">
              Harvested with care and delivered fresh. Explore our best-selling selection from the farm.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg px-4 py-2 transition">
            Wholesale Inquiries
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm hover:shadow-md transition">
              <span className="absolute right-4 top-4 text-xs font-semibold bg-sky-100 text-sky-700 px-2 py-1 rounded-md">{p.tag}</span>
              <div className="h-36 rounded-xl mb-4 bg-gradient-to-tr from-sky-100 via-emerald-100 to-slate-100 flex items-center justify-center">
                <span className="text-5xl">🦀</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-slate-900 font-semibold">{p.price}</span>
                <button className="text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 px-3 py-1.5 rounded-lg transition">
                  Add to List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
