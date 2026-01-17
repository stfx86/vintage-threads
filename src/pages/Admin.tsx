import { useState } from 'react';
import { Plus, Trash2, Edit2, X, Save, ImagePlus } from 'lucide-react';
import { useProducts } from '@/context/ProductContext';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';

const Admin = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'clothes' as 'clothes' | 'shoes',
    size: '',
    condition: 'good' as 'excellent' | 'good' | 'fair',
    images: ['/placeholder.svg'],
    featured: false,
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: 'clothes',
      size: '',
      condition: 'good',
      images: ['/placeholder.svg'],
      featured: false,
    });
    setEditingProduct(null);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      size: product.size,
      condition: product.condition,
      images: product.images,
      featured: product.featured,
    });
    setIsFormOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      size: formData.size,
      condition: formData.condition,
      images: formData.images,
      featured: formData.featured,
    };

    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
      toast.success('Product updated successfully');
    } else {
      addProduct(productData);
      toast.success('Product added successfully');
    }

    resetForm();
    setIsFormOpen(false);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteProduct(id);
      toast.success('Product deleted');
    }
  };

  const handleImageUrl = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      setFormData(prev => ({ ...prev, images: [url] }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="font-display text-2xl font-semibold">
            Admin Dashboard
          </h1>
          <a href="/" className="text-sm hover:text-vintage-gold transition-colors">
            ← Back to Store
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Actions */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-semibold">Products</h2>
            <p className="text-muted-foreground">{products.length} items in inventory</p>
          </div>
          <Button
            variant="vintage"
            onClick={() => {
              resetForm();
              setIsFormOpen(true);
            }}
          >
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Product Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg shadow-elegant max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="font-display text-xl font-semibold">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsFormOpen(false);
                    resetForm();
                  }}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    placeholder="Vintage Leather Jacket"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    required
                    placeholder="Describe the product..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($) *</Label>
                    <Input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      required
                      placeholder="99.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Size *</Label>
                    <Input
                      id="size"
                      value={formData.size}
                      onChange={e => setFormData(prev => ({ ...prev, size: e.target.value }))}
                      required
                      placeholder="M, L, 42, etc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={v => setFormData(prev => ({ ...prev, category: v as 'clothes' | 'shoes' }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clothes">Clothes</SelectItem>
                        <SelectItem value="shoes">Shoes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Condition *</Label>
                    <Select
                      value={formData.condition}
                      onValueChange={v => setFormData(prev => ({ ...prev, condition: v as 'excellent' | 'good' | 'fair' }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Product Image</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-muted rounded overflow-hidden">
                      <img
                        src={formData.images[0]}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Button type="button" variant="outline" onClick={handleImageUrl}>
                      <ImagePlus className="h-4 w-4" />
                      Set Image URL
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={v => setFormData(prev => ({ ...prev, featured: v }))}
                  />
                  <Label htmlFor="featured">Featured Product</Label>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setIsFormOpen(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="vintage" className="flex-1">
                    <Save className="h-4 w-4" />
                    {editingProduct ? 'Update' : 'Add'} Product
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Products List */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-medium text-sm">Product</th>
                  <th className="text-left p-4 font-medium text-sm">Category</th>
                  <th className="text-left p-4 font-medium text-sm">Size</th>
                  <th className="text-left p-4 font-medium text-sm">Condition</th>
                  <th className="text-left p-4 font-medium text-sm">Price</th>
                  <th className="text-left p-4 font-medium text-sm">Featured</th>
                  <th className="text-right p-4 font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4 capitalize">{product.category}</td>
                    <td className="p-4">{product.size}</td>
                    <td className="p-4">
                      <Badge variant="outline" className="capitalize">
                        {product.condition}
                      </Badge>
                    </td>
                    <td className="p-4 font-semibold">${product.price}</td>
                    <td className="p-4">
                      {product.featured && (
                        <Badge className="bg-vintage-gold text-vintage-dark">Featured</Badge>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(product)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                          onClick={() => handleDelete(product.id, product.name)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
