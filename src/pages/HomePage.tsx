import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Tv, 
  Wind, 
  Volume2, 
  Layers, 
  Radio, 
  ShieldCheck, 
  Zap, 
  Search, 
  Truck, 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, BRANDS, HERO_IMAGE, SAMPLE_REVIEWS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { VideoPlaceholder } from '../components/common/VideoPlaceholder';
import { AdBanner } from '../components/common/AdBanner';

export const HomePage: React.FC = () => {
  const { products } = useShop();
  const [activeTab, setActiveTab] = useState<'all' | 'tv' | 'ac' | 'tvs-audio'>('all');

  const filteredFeatured = products.filter((product) => {
    if (activeTab === 'tv') return product.category === 'smart-tv-remotes';
    if (activeTab === 'ac') return product.category === 'ac-remotes';
    if (activeTab === 'tvs-audio') return product.category === 'smart-tvs' || product.category === 'audio-sound';
    return product.isFeatured || product.isBestSeller;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src={HERO_IMAGE}
              alt="RemoteElectronic Showcase"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400">
                <span className="uppercase tracking-widest">RemoteElectronic Store</span>
                <span aria-hidden="true">·</span>
                <span>Direct Replacement & OEM Standards</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Original & Universal Remotes for <span className="text-indigo-400">1,000+ Brands</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Replaces broken or lost remotes for Smart TVs, Split Air Conditioners, Set-Top Boxes, and Soundbars. Every unit is infrared & Bluetooth signal tested before dispatch.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/products"
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-md flex items-center gap-2"
                >
                  <span>Explore All Remotes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/category/smart-tvs"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition-colors backdrop-blur-xs border border-white/20 flex items-center gap-2"
                >
                  <Tv className="w-4 h-4 text-indigo-400" />
                  <span>Shop 4K Smart TVs</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Tested Signals</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fast Delhi Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>7-Day Easy Return</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Compatibility Marquee / Strip */}
        <section className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Compatible Across Global & Indian Electronics Brands:
              </span>
              <Link to="/products" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {BRANDS.map((brand) => (
                <Link
                  key={brand}
                  to={`/products?brand=${encodeURIComponent(brand)}`}
                  className="px-4 py-2 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/80 rounded-lg text-xs font-semibold text-slate-700 whitespace-nowrap shrink-0 transition-colors"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                Browse Collections
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Shop by Electronic Category
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              <span>Explore all {CATEGORIES.length} categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {cat.slug.includes('tv') ? (
                        <Tv className="w-6 h-6" />
                      ) : cat.slug.includes('ac') ? (
                        <Wind className="w-6 h-6" />
                      ) : cat.slug.includes('audio') ? (
                        <Volume2 className="w-6 h-6" />
                      ) : cat.slug.includes('box') ? (
                        <Radio className="w-6 h-6" />
                      ) : (
                        <Layers className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {cat.count}+ Models
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <span>View catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products Section with Segmented Controls */}
        <section className="bg-slate-100/60 border-t border-b border-slate-200/80 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  Verified Top Picks
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Popular Replacement Remotes & Devices
                </h2>
              </div>

              {/* Functional Segmented Filter Controls */}
              <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'all'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Top Picks
                </button>
                <button
                  onClick={() => setActiveTab('tv')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'tv'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  TV Remotes
                </button>
                <button
                  onClick={() => setActiveTab('ac')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'ac'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AC Remotes
                </button>
                <button
                  onClick={() => setActiveTab('tvs-audio')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeTab === 'tvs-audio'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Smart TVs & Audio
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFeatured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl text-sm border border-slate-200 shadow-xs transition-colors"
              >
                <span>Browse Complete Catalog</span>
                <ArrowRight className="w-4 h-4 text-indigo-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* Guide / How to Find Remote Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Helpful Remote Advice
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                  Can't Find Your Exact Remote Model Number?
                </h3>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  Most TVs and Air Conditioners print the exact part code inside the battery compartment or on the rear manufacturer label. Our Delhi technical team can verify compatibility for you.
                </p>

                <div className="mt-6 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">1</div>
                    <span>Look at the bottom front edge or inside battery lid of old remote</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">2</div>
                    <span>Check TV back sticker for model number (e.g. 55AU8000, OLED55C2)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">3</div>
                    <span>Contact our helpline at +91 81307 33325 for instant match assistance</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/faq"
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    View Remote Pairing Guide
                  </Link>
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-semibold transition-colors border border-white/20"
                  >
                    Send Photo for Verification
                  </Link>
                </div>
              </div>

              {/* Blank square space as requested for video placeholder */}
              <div className="flex justify-center">
                <VideoPlaceholder 
                  title="Remote Pairing Video Guide"
                  subtitle="Testing IR frequency and Bluetooth voice remote setup"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Verified Customer Reviews Section */}
        <section className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                4.8 / 5 Rating from 640+ Verified Customers
              </h2>
              <p className="text-xs text-slate-500 mt-2">
                Real customer feedback from customers across India who replaced their remotes with RemoteElectronic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SAMPLE_REVIEWS.slice(0, 3).map((rev) => (
                <div key={rev.id} className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 font-mono">{rev.date}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-slate-900 block">{rev.author}</span>
                      <span className="text-[11px] text-slate-500 font-mono">{rev.deviceUsed}</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Ad Section at the bottom of the page as requested */}
      <AdBanner />
    </div>
  );
};
