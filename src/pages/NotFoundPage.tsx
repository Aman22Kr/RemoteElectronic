import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, ArrowLeft, Search, Home } from 'lucide-react';
import { AdBanner } from '../components/common/AdBanner';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-6">
          <Tv className="w-10 h-10" />
        </div>

        <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-md mx-auto leading-relaxed">
          The remote control model or page you are looking for may have been updated, relocated, or temporarily disconnected.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <Search className="w-4 h-4" />
            <span>Search Remote Catalog</span>
          </Link>
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
