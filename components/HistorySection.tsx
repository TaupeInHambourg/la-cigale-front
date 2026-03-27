import React from 'react';

export default function HistorySection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <span className="text-gold font-bold tracking-widest text-xs uppercase">Monument Historique</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Un Héritage Signé <br />Émile Libaudière</h2>

          <div className="w-20 h-px bg-gold"></div>

          <p className="text-lg text-charcoal/80 leading-relaxed font-light">
            Inaugurée en 1895, La Cigale est le chef-d’œuvre de l’architecte-céramiste Émile Libaudière. Ses murs, ornés de faïences et de sculptures, racontent une époque où l'art de vivre à la française atteignait son apogée.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed font-light">
            Classée Monument Historique depuis 1964, elle continue d'émerveiller les voyageurs et les Nantais par son décor théâtral et sa gastronomie authentique.
          </p>

          <a href="#" className="btn-outline px-10 py-4 text-sm mt-4 inline-block text-center cursor-pointer">
            Explorer notre histoire
          </a>
        </div>

        <div className="order-1 lg:order-2 h-[600px] bg-sage/10 relative">
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="w-full h-full border border-gold p-4">
              <img
                alt="Détail architectural céramique"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
