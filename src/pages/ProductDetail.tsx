import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useProducts } from '@/context/ProductContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const { getProduct } = useProducts();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = getProduct(id || '');

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-2xl mb-4">Product not found</h1>
          <Link to="/shop">
            <Button variant="outline">Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const conditionColors = {
    excellent: 'bg-vintage-gold/20 text-vintage-brown border-vintage-gold',
    good: 'bg-secondary text-secondary-foreground border-border',
    fair: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm uppercase tracking-wider">Back to Shop</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="capitalize">
                {product.category}
              </Badge>
              <Badge variant="outline" className={conditionColors[product.condition]}>
                {product.condition}
              </Badge>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {product.name}
            </h1>

            <p className="font-display text-3xl font-semibold text-vintage-gold mb-6">
              ${product.price}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="space-y-3 mb-8 pb-8 border-b border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Size</span>
                <span className="font-medium">{product.size}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Condition</span>
                <span className="font-medium capitalize">{product.condition}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium capitalize">{product.category}</span>
              </div>
            </div>

            <Button
              variant={added ? 'secondary' : 'vintage'}
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? (
                <>
                  <Check className="h-5 w-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </>
              )}
            </Button>

            {/* Trust badges */}
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="text-vintage-gold">✦</span>
                <span>Free shipping on all orders</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-vintage-gold">✦</span>
                <span>Cash on delivery available</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-vintage-gold">✦</span>
                <span>Authenticity guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
