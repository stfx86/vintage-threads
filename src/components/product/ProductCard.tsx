import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const conditionColors = {
    excellent: 'bg-vintage-gold/20 text-vintage-brown border-vintage-gold',
    good: 'bg-secondary text-secondary-foreground border-border',
    fair: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <article className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 border border-border">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {product.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-vintage-gold text-vintage-dark font-display text-xs tracking-wider">
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-lg font-medium text-foreground group-hover:text-vintage-gold transition-colors line-clamp-1">
              {product.name}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2 mb-3 font-body">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-display text-xl font-semibold text-foreground">
              ${product.price}
            </span>
            <Badge variant="outline" className={conditionColors[product.condition]}>
              {product.condition}
            </Badge>
          </div>

          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span className="capitalize">{product.category}</span>
            <span>•</span>
            <span>Size {product.size}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
