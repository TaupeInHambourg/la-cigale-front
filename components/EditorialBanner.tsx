import React from 'react';

export default function EditorialBanner() {
  return (
    <section className="py-24 bg-cream text-center px-6 border-y border-gold/10">
      <div className="max-w-3xl mx-auto">
        {/* Ornament */}
        <div className="ornament-divider">
          <svg fill="currentColor" viewBox="0 0 100 20">
            <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
            <circle cx="50" cy="10" r="1.5"></circle>
            <path d="M40 10 Q50 5 60 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </svg>
        </div>

        <h2 className="font-accent text-3xl md:text-5xl text-charcoal italic leading-relaxed">
          « Peut-être la plus belle <br /> Brasserie du monde »
        </h2>

        {/* Ornament Reversed */}
        <div className="ornament-divider scale-y-[-1]">
          <svg fill="currentColor" viewBox="0 0 100 20">
            <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
            <circle cx="50" cy="10" r="1.5"></circle>
            <path d="M40 10 Q50 5 60 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
