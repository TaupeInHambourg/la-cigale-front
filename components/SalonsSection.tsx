import React from 'react';

export default function SalonsSection() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto text-center">
      <div className="space-y-8">
        <h2 className="font-serif text-4xl text-charcoal">Les Salons Privés</h2>

        <div className="aspect-video bg-cream border border-gold/10 mb-8 overflow-hidden shadow-2xl">
          <img
            alt="Salon privatisé"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
          />
        </div>

        <p className="text-lg text-charcoal/80 max-w-2xl mx-auto font-light">
          Pour vos événements professionnels ou familiaux, La Cigale met à votre disposition ses salons d’exception alliant discrétion et prestige.
        </p>

        <button className="btn-outline px-10 py-4 text-sm mt-4">
          Nous contacter
        </button>
      </div>
    </section>
  );
}
