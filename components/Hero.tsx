import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <img
          alt="Salle principale Art Nouveau"
          className="w-full h-full object-cover opacity-80"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="hero-title font-serif text-6xl md:text-8xl mb-6 leading-tight text-white drop-shadow-lg">
          L'Eveil des Sens <br /> depuis 1895
        </h1>
        <p className="font-accent text-2xl md:text-3xl mb-10 italic text-white/90 drop-shadow-md">
          Peut-être la plus belle brasserie du monde
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-gold px-10 py-4 text-sm shadow-xl">
            Réserver
          </button>
          <button className="btn-outline px-10 py-4 text-sm bg-black/20 backdrop-blur-md text-white border-white/50 hover:bg-white/10 hover:border-white transition-all">
            Découvrir la Brasserie
          </button>
        </div>
      </div>

      {/* Scroll Indicator Ornament */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </svg>
      </div>
    </section>
  );
}
