import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, AlertCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { Product } from '../../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose }) => {
  const { products } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          inputRef.current?.focus();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
      setSelectedBrand(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const brands = Array.from(new Set(products.map((p) => p.brand)));

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;
    if (!term) return matchesBrand;

    const matchesName = product.name.toLowerCase().includes(term);
    const matchesCategory = product.categoryLabel.toLowerCase().includes(term);
    const matchesPart = product.partNumber.toLowerCase().includes(term);
    const matchesCompatible = product.compatibleModels.some((m) => m.toLowerCase().includes(term));
    const matchesBrandName = product.brand.toLowerCase().includes(term);

    return matchesBrand && (matchesName || matchesCategory || matchesPart || matchesCompatible || matchesBrandName);
  });

  const handleSelectProduct = (product: Product) => {
    onClose();
    navigate(`/product/${product.id}`);
  };

  const handleViewAllResults = () => {
    onClose();
    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 pb-12">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by remote model, TV brand, part number (e.g. Samsung, BN59, Daikin)..."
            className="w-full text-base bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono text-slate-400 hover:text-slate-600 bg-slate-100 rounded border border-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Quick Brand Filter Tabs */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-slate-400 font-medium whitespace-nowrap shrink-0 text-[11px]">Filter Brand:</span>
          <button
            onClick={() => setSelectedBrand(null)}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 font-medium transition-colors ${
              selectedBrand === null
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All
          </button>
          {brands.slice(0, 7).map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap shrink-0 font-medium transition-colors ${
                selectedBrand === brand
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredProducts.length > 0 ? (
            <div className="space-y-1">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-indigo-50/70 cursor-pointer transition-colors group"
                >
                  <div className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-indigo-700">{product.brand}</span>
                      <span>·</span>
                      <span className="font-mono">{product.partNumber}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 truncate group-hover:text-indigo-600">
                      {product.name}
                    </h4>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      Fits: {product.compatibleModels.slice(0, 2).join(', ')}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-slate-900 font-mono">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[10px] text-emerald-600 font-medium">In Stock</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 px-4 text-center">
              <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">No matching electronics or remotes found</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for TV brand, "AC remote", or part number like "BN59" or "MR22".
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Over 1,000+ brand remote frequencies supported</span>
          </div>

          {filteredProducts.length > 0 && (
            <button
              onClick={handleViewAllResults}
              className="font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              <span>View full catalog ({filteredProducts.length})</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
