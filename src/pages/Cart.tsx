import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
            <h1 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Discover our curated collection of vintage treasures.
            </p>
            <Link to="/shop">
              <Button variant="vintage" size="lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm uppercase tracking-wider">Continue Shopping</span>
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex gap-4 p-4 bg-card rounded-lg border border-border"
              >
                <Link to={`/product/${product.id}`} className="shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-24 h-32 object-cover rounded"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-display text-lg font-medium hover:text-vintage-gold transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Size: {product.size} · {product.condition}
                  </p>
                  <p className="font-display text-lg font-semibold mt-2">
                    ${product.price}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="font-display text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-vintage-gold">Free</span>
                </div>
              </div>

              <div className="flex justify-between py-6 text-lg font-semibold">
                <span>Total</span>
                <span className="font-display">${totalPrice.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <Button variant="vintage" size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Cash on delivery · Free shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
