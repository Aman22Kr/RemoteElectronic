import React, { useState } from 'react';
import { Megaphone, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <section className="w-full bg-slate-100 border-t border-b border-slate-200 py-4 my-8" aria-label="Sponsored Advertisement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs relative">
          <div className="flex items-center gap-3.5 flex-1 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
              <Megaphone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                  Advertisement
                </span>
                <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Partner
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mt-0.5 truncate">
                RemoteElectronic Smart Blaster Pro — Turn Any Smartphone into a Universal Remote
              </p>
              <p className="text-xs text-slate-500 hidden md:block">
                Compatible with 100,000+ TVs, Split ACs, Soundbars and Set-Top Boxes. Extra 20% off with coupon <code className="font-mono bg-slate-100 px-1 py-0.2 rounded text-slate-700">BLASTER20</code>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-stretch sm:self-auto justify-end">
            <Link
              to="/products"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Explore Deals</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              title="Dismiss ad"
              aria-label="Dismiss advertisement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
