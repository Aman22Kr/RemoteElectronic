import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Scale, Star, Check } from 'lucide-react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted, toggleCompare, isCompared } = useShop();

  const wishlisted = isWishlisted(product.id);
  const compared = isCompared(product.id);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>

        {/* Status indicator - quiet single tag */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-none">
          {product.isBestSeller && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs">
              Best Seller
            </span>
          )}
          {product.isNewArrival && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-100/90 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs">
              New
            </span>
          )}
        </div>

        {/* Quick Action Floating Controls */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              wishlisted
                ? 'bg-rose-50 text-rose-600 shadow-sm'
                : 'bg-white/90 text-slate-600 hover:text-rose-600 hover:bg-white shadow-2xs'
            }`}
            title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-label="Wishlist toggle"
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleCompare(product.id);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              compared
                ? 'bg-amber-100 text-amber-700 shadow-sm'
                : 'bg-white/90 text-slate-600 hover:text-amber-600 hover:bg-white shadow-2xs'
            }`}
            title={compared ? 'In compare list' : 'Compare product'}
            aria-label="Compare toggle"
          >
            <Scale className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Category and Brand */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
            <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-600">
              {product.brand}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{product.categoryLabel}</span>
          </div>

          {/* Product Title */}
          <Link to={`/product/${product.id}`} className="block group-hover:text-indigo-600 transition-colors">
            <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-semibold text-slate-800 font-mono">{product.rating}</span>
            <span>·</span>
            <span>({product.reviewCount})</span>
          </div>

          {/* Key capability highlights */}
          <p className="text-xs text-slate-500 mt-2 line-clamp-1">
            {product.features[0]}
          </p>
        </div>

        {/* Pricing and Action row */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-slate-900 font-mono">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through font-mono">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {discountPercent > 0 && (
              <span className="text-[11px] font-semibold text-emerald-600">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-3 py-1.5 bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-2xs whitespace-nowrap shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
