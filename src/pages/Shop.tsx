import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { useProducts } from '@/context/ProductContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useProducts();
  
  const categoryFilter = searchParams.get('category') || 'all';
  const [conditionFilter, setConditionFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Condition filter
    if (conditionFilter !== 'all') {
      filtered = filtered.filter(p => p.condition === conditionFilter);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return filtered;
  }, [products, categoryFilter, conditionFilter, sortBy]);

  const setCategory = (cat: string) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <div className="bg-vintage-cream py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-vintage-gold mb-3">
              Our Collection
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
              {categoryFilter === 'clothes' ? 'Vintage Clothes' : 
               categoryFilter === 'shoes' ? 'Vintage Shoes' : 'Shop All'}
            </h1>
            <div className="w-24 h-px bg-vintage-gold mx-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">Category:</span>
            <Button
              variant={categoryFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCategory('all')}
            >
              All
            </Button>
            <Button
              variant={categoryFilter === 'clothes' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCategory('clothes')}
            >
              Clothes
            </Button>
            <Button
              variant={categoryFilter === 'shoes' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCategory('shoes')}
            >
              Shoes
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Select value={conditionFilter} onValueChange={setConditionFilter}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="fair">Fair</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
