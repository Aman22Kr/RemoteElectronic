import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  RotateCcw, 
  Search, 
  SlidersHorizontal, 
  Check, 
  ChevronDown, 
  Tv, 
  Volume2, 
  Wind 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, BRANDS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { AdBanner } from '../components/common/AdBanner';

export const ProductsPage: React.FC = () => {
  const { products } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [priceMax, setPriceMax] = useState<number>(35000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [voiceOnly, setVoiceOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync state if query params change
  React.useEffect(() => {
    if (searchParams.get('search')) setSearchQuery(searchParams.get('search') || '');
    if (searchParams.get('category')) setSelectedCategory(searchParams.get('category') || 'all');
    if (searchParams.get('brand')) setSelectedBrand(searchParams.get('brand') || 'all');
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesPart = p.partNumber.toLowerCase().includes(q);
        const matchesCat = p.categoryLabel.toLowerCase().includes(q);
        const matchesModel = p.compatibleModels.some((m) => m.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesPart && !matchesCat && !matchesModel) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Brand
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
        return false;
      }

      // Price
      if (p.price > priceMax) {
        return false;
      }

      // In stock
      if (inStockOnly && !p.inStock) {
        return false;
      }

      // Voice control
      if (voiceOnly && !p.specs.voiceControl) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [products, searchQuery, selectedCategory, selectedBrand, priceMax, inStockOnly, voiceOnly, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceMax(35000);
    setInStockOnly(false);
    setVoiceOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedCategory !== 'all' || 
    selectedBrand !== 'all' || 
    priceMax < 35000 || 
    inStockOnly || 
    voiceOnly;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Page Header */}
        <div className="bg-white border-b border-slate-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Remote Controls & Electronics Catalog
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Showing {filteredProducts.length} certified remote controls, TVs and audio products
                </p>
              </div>

              {/* Search bar inside header */}
              <div className="relative max-w-sm w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by model, brand, or TV name..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 shadow-2xs"
            >
              <Filter className="w-3.5 h-3.5 text-indigo-600" />
              <span>Filters {hasActiveFilters && '(Active)'}</span>
            </button>

            {/* Active filter summary tag */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All Filters</span>
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 ml-auto text-xs">
              <span className="text-slate-500 hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:border-indigo-500 shadow-2xs"
              >
                <option value="featured">Featured & Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Filter Sidebar */}
            <aside
              className={`lg:block ${
                showMobileFilters ? 'block mb-6' : 'hidden'
              } lg:col-span-1 space-y-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs self-start`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Refine Search
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-[11px] font-semibold text-rose-600 hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-2.5 h-2.5" /> Reset
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-2.5 block">
                  Category
                </label>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md transition-colors flex items-center justify-between ${
                      selectedCategory === 'all'
                        ? 'bg-indigo-50 text-indigo-700 font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Products</span>
                    <span className="font-mono text-[10px] text-slate-400">{products.length}</span>
                  </button>
                  {CATEGORIES.map((cat) => {
                    const count = products.filter((p) => p.category === cat.slug).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md transition-colors flex items-center justify-between ${
                          selectedCategory === cat.slug
                            ? 'bg-indigo-50 text-indigo-700 font-bold'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate">{cat.name}</span>
                        <span className="font-mono text-[10px] text-slate-400">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brands */}
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-2.5 block">
                  Compatible Brand
                </label>
                <div className="space-y-1 max-h-48 overflow-y-auto text-xs pr-1">
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className={`w-full text-left px-2.5 py-1 rounded-md transition-colors flex items-center justify-between ${
                      selectedBrand === 'all'
                        ? 'bg-slate-900 text-white font-medium'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Brands</span>
                  </button>
                  {BRANDS.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`w-full text-left px-2.5 py-1 rounded-md transition-colors flex items-center justify-between ${
                        selectedBrand === brand
                          ? 'bg-indigo-600 text-white font-medium'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">{brand}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Max Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-700">Max Price</label>
                  <span className="font-mono text-xs font-bold text-slate-900">
                    ₹{priceMax.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="299"
                  max="35000"
                  step="100"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>₹299</span>
                  <span>₹35,000+</span>
                </div>
              </div>

              {/* Checkbox Options */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-600"
                  />
                  <span>In Stock Only</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={voiceOnly}
                    onChange={(e) => setVoiceOnly(e.target.checked)}
                    className="rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-600"
                  />
                  <span>Voice Control / Bluetooth Only</span>
                </label>
              </div>
            </aside>

            {/* Product Grid Area */}
            <main className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    No matching electronics or remotes found
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Try broadening your filters or resetting the search term. You can also contact support to request a specific remote part number.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
