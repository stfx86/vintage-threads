import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vintage-cream via-background to-vintage-beige" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-vintage-gold blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-vintage-brown blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-vintage-gold mb-6 animate-fade-in">
            Curated Vintage Collection
          </p>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight animate-slide-up">
            Timeless Fashion,{' '}
            <span className="italic text-vintage-gold">Reimagined</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover unique vintage clothing and shoes, each piece carefully selected 
            for its quality, style, and enduring elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/shop">
              <Button variant="hero" size="xl">
                Shop Collection
              </Button>
            </Link>
            <Link to="/shop?category=clothes">
              <Button variant="outline" size="xl">
                Browse Clothes
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <span className="text-vintage-gold">✦</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-vintage-gold">✦</span>
              <span>Cash on Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-vintage-gold">✦</span>
              <span>Authentic Vintage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
