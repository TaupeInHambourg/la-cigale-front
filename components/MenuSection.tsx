import React from 'react';

const menus = [
  {
    title: "Petit Déjeuner",
    description: "Commencez la journée sous les ors de la salle principale.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Déjeuner",
    description: "Le ballet des serveurs pour une escale gourmande et efficace.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Salon de Thé",
    description: "Pâtisseries maison et thés fins dans une atmosphère feutrée.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dîner & Souper",
    description: "L'élégance du soir et les saveurs des produits de la mer.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800",
  }
];

export default function MenuSection() {
  return (
    <section className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-charcoal">Les Cartes</h2>
          <p className="font-accent text-xl italic text-gold mt-2">Le goût de l'excellence à toute heure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menus.map((menu, idx) => (
            <div key={idx} className="group">
              <div className="aspect-[3/4] bg-cream mb-6 overflow-hidden border border-gold/10">
                <img
                  alt={menu.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={menu.image}
                />
              </div>
              <h3 className="font-serif text-xl mb-2">{menu.title}</h3>
              <p className="text-sm text-charcoal/60 mb-4 h-12">{menu.description}</p>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-gold group-hover:text-burgundy transition-colors">
                Voir la carte
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
