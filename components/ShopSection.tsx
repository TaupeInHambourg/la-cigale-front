import React from 'react';

export default function ShopSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Boutique */}
      <div className="relative group h-[500px] flex items-center justify-center overflow-hidden border-r border-gold/10">
        <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors duration-500 z-10"></div>
        <img
          alt="Produits Boutique"
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 z-0 bg-charcoal"
          src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800"
        />
        <div className="relative z-20 text-center px-12 text-white">
          <h2 className="font-serif text-3xl mb-4 drop-shadow-md">La Boutique</h2>
          <p className="text-sm text-white/90 mb-8 max-w-xs mx-auto drop-shadow-sm">Emportez un morceau de l'histoire chez vous avec nos produits exclusifs.</p>
          <a href="#" className="btn-gold px-8 py-3 text-xs inline-block shadow-lg">Découvrir la boutique</a>
        </div>
      </div>

      {/* Carte Cadeau */}
      <div className="relative group h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-burgundy/10 group-hover:bg-burgundy/20 transition-colors duration-500 z-10"></div>
        <img
          alt="Carte Cadeau"
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 z-0 bg-charcoal"
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800"
        />
        <div className="relative z-20 text-center px-12 text-white">
          <h2 className="font-serif text-3xl mb-4 drop-shadow-md">Carte Cadeau</h2>
          <p className="text-sm text-white/90 mb-8 max-w-xs mx-auto drop-shadow-sm">Offrez une expérience inoubliable au sein de notre monument historique.</p>
          <a href="#" className="btn-gold px-8 py-3 text-xs inline-block shadow-lg">Offrir un coffret</a>
        </div>
      </div>
    </section>
  );
}
