import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Vintage<span className="text-vintage-gold italic">Vault</span>
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Curated collection of timeless vintage clothing and shoes. 
              Each piece tells a story from a bygone era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-primary-foreground/70 hover:text-vintage-gold transition-colors text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/shop?category=clothes" className="text-primary-foreground/70 hover:text-vintage-gold transition-colors text-sm">
                  Clothes
                </Link>
              </li>
              <li>
                <Link to="/shop?category=shoes" className="text-primary-foreground/70 hover:text-vintage-gold transition-colors text-sm">
                  Shoes
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <span className="text-vintage-gold">✦</span>
                Free Shipping on All Orders
              </li>
              <li className="flex items-center gap-2">
                <span className="text-vintage-gold">✦</span>
                Cash on Delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-vintage-gold">✦</span>
                Quality Guaranteed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} VintageVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
