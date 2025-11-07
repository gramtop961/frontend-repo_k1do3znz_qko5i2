import React from 'react';

const posts = [
  {
    id: 1,
    title: 'How We Raise Healthier Crabs',
    excerpt: 'A behind-the-scenes look at our low-stress tanks, clean water cycles, and sustainable feed program.',
    badge: 'Farm Practices',
  },
  {
    id: 2,
    title: 'Seasonality: When Soft-Shell Shines',
    excerpt: 'Timing is everything. Here’s how we plan our harvests for peak tenderness and taste.',
    badge: 'Seasonality',
  },
  {
    id: 3,
    title: 'Chef Tips: Getting the Most Flavor',
    excerpt: 'From quick boils to butter poaches, our favorite ways to cook crab to perfection at home.',
    badge: 'In The Kitchen',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">From The Farm Journal</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">Stories, tips, and updates straight from our coast.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
              <span className="text-xs font-semibold text-sky-700 bg-sky-100 px-2 py-1 rounded-md">{post.badge}</span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{post.excerpt}</p>
              <a href="#contact" className="inline-block mt-4 text-sm font-medium text-sky-700 hover:text-sky-800">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
