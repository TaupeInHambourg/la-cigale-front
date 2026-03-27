import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-3xl font-bold tracking-tight text-charcoal">
          La Cigale
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-charcoal">
          <Link className="nav-link" href="#">La Brasserie</Link>
          <Link className="nav-link" href="#">Les Cartes</Link>
          <Link className="nav-link" href="#">Spectacles</Link>
          <Link className="nav-link" href="#">Boutique</Link>
          <Link className="nav-link" href="#">Carte Cadeau</Link>
        </nav>

        {/* CTA & Phone */}
        <div className="flex items-center space-x-6">
          <a className="hidden md:block text-xs font-bold tracking-tighter text-gold" href="tel:+33251849494">
            +33 (0)2 51 84 94 94
          </a>
          <button className="btn-gold px-6 py-3 text-xs">
            Réserver une table
          </button>
        </div>
      </div>
    </header>
  );
}
