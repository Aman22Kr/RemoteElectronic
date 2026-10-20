import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Tv, 
  Search, 
  Heart, 
  ShoppingBag, 
  Scale, 
  Menu, 
  X, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Truck 
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { QuickSearchModal } from './QuickSearchModal';

export const Header: React.FC = () => {
  const { cartCount, wishlist, compareList } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'All Products', href: '/products' },
    { label: 'TV Remotes', href: '/category/smart-tv-remotes' },
    { label: 'AC Remotes', href: '/category/ac-remotes' },
    { label: 'Smart TVs', href: '/category/smart-tvs' },
    { label: 'Soundbars', href: '/category/audio-sound' },
    { label: 'Track Order', href: '/track-order' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/products' && location.pathname === '/products') return true;
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <Truck className="w-3.5 h-3.5" /> Free Express Delivery on ₹499+
            </span>
            <span className="hidden md:inline-block text-slate-600">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Signal Tested Remotes
            </span>
            <span className="hidden lg:inline-block text-slate-600">·</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5" /> Support: Mon-Sun 9am - 9pm
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <a 
              href="tel:08130733325" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-indigo-400" />
              <span>+91 81307 33325</span>
            </a>
            <span className="text-slate-600">·</span>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ & Help
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single Brand Wordmark */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:bg-indigo-700 transition-colors">
                <Tv className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight leading-none text-slate-900">
                  Remote<span className="text-indigo-600">Electronic</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 mt-0.5">
                  Universal & OEM Specialist
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${
                    isActive(link.href)
                      ? 'border-indigo-600 text-indigo-600 font-semibold'
                      : 'border-transparent text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Zone 3: Actions (Search, Compare, Wishlist, Cart) */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Quick Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200"
                aria-label="Open search dialog"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span className="hidden sm:inline">Search remote model or TV...</span>
                <kbd className="hidden lg:inline-block font-mono text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-500">
                  ⌘K
                </kbd>
              </button>

              {/* Compare Button */}
              <Link
                to="/compare"
                className="relative p-2.5 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
                title="Compare Products"
                aria-label={`Compare ${compareList.length} products`}
              >
                <Scale className="w-5 h-5" />
                {compareList.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {compareList.length}
                  </span>
                )}
              </Link>

              {/* Wishlist Button */}
              <Link
                to="/wishlist"
                className="relative p-2.5 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
                title="Saved Wishlist"
                aria-label={`Wishlist containing ${wishlist.length} items`}
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Link */}
              <Link
                to="/cart"
                className="flex items-center gap-2 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-xs shadow-xs transition-colors whitespace-nowrap shrink-0"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                <span className="w-5 h-5 rounded-full bg-white text-indigo-700 text-[11px] font-bold flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
            <div className="mb-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchModalOpen(true);
                }}
                className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-slate-500 bg-slate-100 rounded-lg"
              >
                <Search className="w-4 h-4" />
                <span>Search remote, TV model or brand...</span>
              </button>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-indigo-50 text-indigo-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600 font-mono">
              <a href="tel:08130733325" className="flex items-center gap-2 text-indigo-600 font-semibold py-1">
                <PhoneCall className="w-4 h-4" /> Helpline: +91 81307 33325
              </a>
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4" /> Store Hours: 9:00 AM - 9:00 PM (Mon-Sun)
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      <QuickSearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </>
  );
};
