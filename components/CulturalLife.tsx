import React from 'react';

export default function CulturalLife() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-charcoal/40 z-10"></div>

      <div className="absolute inset-0 z-0 bg-charcoal">
        <img
          alt="Spectacle ou atmosphère culturelle"
          className="w-full h-full object-cover opacity-80"
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2000"
        />
        <div className="absolute inset-0 bg-charcoal/60"></div>
      </div>

      <div className="relative z-20 max-w-2xl px-6">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 drop-shadow-md">La Vie Culturelle</h2>
        <p className="text-lg mb-10 font-light leading-relaxed drop-shadow-sm">
          Théâtre, musique et poésie se rencontrent régulièrement entre nos murs pour faire vivre l'âme artistique de Nantes.
        </p>
        <button className="btn-gold px-10 py-4 text-sm border-none shadow-xl">
          Découvrir les spectacles
        </button>
      </div>
    </section>
  );
}
