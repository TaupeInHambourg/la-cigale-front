import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <span className="font-serif text-3xl text-gold">La Cigale</span>
            <p className="text-cream/50 text-sm leading-relaxed">
              Une institution Nantaise depuis 1895. <br />
              Service continu tous les jours.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gold border-b border-gold/20 pb-2 inline-block">Coordonnées</h4>
            <address className="not-italic text-sm text-cream/70 space-y-2">
              <p>4 Place Graslin</p>
              <p>44000 Nantes, France</p>
              <p className="pt-4"><a href="tel:+33251849494" className="hover:text-gold transition-colors">+33 (0)2 51 84 94 94</a></p>
            </address>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gold border-b border-gold/20 pb-2 inline-block">Liens Utiles</h4>
            <nav className="flex flex-col space-y-3 text-sm text-cream/70">
              <a href="#" className="hover:text-gold transition-colors hover:translate-x-1 inline-block transform duration-300">Recrutement</a>
              <a href="#" className="hover:text-gold transition-colors hover:translate-x-1 inline-block transform duration-300">Presse</a>
              <a href="#" className="hover:text-gold transition-colors hover:translate-x-1 inline-block transform duration-300">Mentions Légales</a>
              <a href="#" className="hover:text-gold transition-colors hover:translate-x-1 inline-block transform duration-300">Confidentialité</a>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gold border-b border-gold/20 pb-2 inline-block">Suivez-nous</h4>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gold transition-colors text-cream/70">Facebook</a>
              <a href="#" className="hover:text-gold transition-colors text-cream/70">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors text-cream/70">YouTube</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-xs text-cream/30 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} La Cigale Nantes — Brasserie Historique
        </div>
      </div>
    </footer>
  );
}
