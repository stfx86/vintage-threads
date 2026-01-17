import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-vintage-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-vintage-gold mb-3">
            Browse By
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Categories
          </h2>
          <div className="w-24 h-px bg-vintage-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Clothes */}
          <Link
            to="/shop?category=clothes"
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-vintage-beige"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-vintage-sepia/30 flex items-center justify-center">
              <span className="text-8xl opacity-20">👔</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-2 group-hover:text-vintage-gold transition-colors">
                Vintage Clothes
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Jackets, blazers, denim & more
              </p>
            </div>
          </Link>

          {/* Shoes */}
          <Link
            to="/shop?category=shoes"
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-vintage-beige"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-vintage-sepia/30 flex items-center justify-center">
              <span className="text-8xl opacity-20">👞</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-2 group-hover:text-vintage-gold transition-colors">
                Vintage Shoes
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Oxfords, boots & timeless footwear
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
