import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { CATEGORIES } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { AdBanner } from '../components/common/AdBanner';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { products } = useShop();

  const currentCategory = CATEGORIES.find(
    (c) => c.slug === categorySlug || c.id === categorySlug
  );

  const categoryProducts = products.filter(
    (p) => p.category === categorySlug || (currentCategory && p.category === currentCategory.id)
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/products" className="hover:text-slate-900">Categories</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">{currentCategory ? currentCategory.name : categorySlug}</span>
          </div>
        </div>

        {/* Hero Banner for Category */}
        <div className="bg-white border-b border-slate-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {currentCategory ? currentCategory.name : 'Category Products'}
            </h1>
            <p className="text-xs text-slate-500 mt-2 max-w-2xl">
              {currentCategory ? currentCategory.description : `Browse our selection of certified ${categorySlug} models.`}
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
              <h3 className="text-base font-bold text-slate-900">No items currently listed</h3>
              <p className="text-xs text-slate-500 mt-1">Check back soon or explore our other remote categories.</p>
              <Link
                to="/products"
                className="mt-6 inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
              >
                View All Products
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
