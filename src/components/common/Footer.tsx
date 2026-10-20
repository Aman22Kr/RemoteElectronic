import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tv, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Footer: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'warning');
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem('remote_electronic_newsletter') || '[]');
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem('remote_electronic_newsletter', JSON.stringify(existing));
    } catch {
      // ignore
    }
    setSubscribed(true);
    showToast('Subscribed! You will receive new remote compatibility guides & offers.', 'success');
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
      {/* Trust & Guarantee Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">100% Quality Signal Tested</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Every infrared diode and Bluetooth chip is verified on our test bench before dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">7-Day Hassle-Free Replacement</h4>
                <p className="text-xs text-slate-400 mt-1">
                  If the remote is not compatible with your TV or AC, we replace or refund right away.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">24-Hour Dispatch</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Orders placed before 2:00 PM ship same day via BlueDart & Delhivery Express.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">1000+ Brand Compatibility</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Database covering older CRT, LCD, LED, QLED, OLED, Split ACs and DTH boxes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Remote<span className="text-indigo-400">Electronic</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              RemoteElectronic is India's premier destination for original and universal remote controls, 4K Smart TVs, home entertainment audio, and electronics spare parts. Serving customers with pride since 1998.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>A-268, Main Road, Anand Nagar, Nithari, Kirari Suleman Nagar, Delhi, 110086</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="tel:08130733325" className="hover:text-white transition-colors">
                  +91 81307 33325 / 081307 33325
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:support@remoteelectronic.com" className="hover:text-white transition-colors">
                  support@remoteelectronic.com
                </a>
              </div>
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Remote Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/category/smart-tv-remotes" className="hover:text-white transition-colors">
                  Smart TV & Voice Remotes
                </Link>
              </li>
              <li>
                <Link to="/category/ac-remotes" className="hover:text-white transition-colors">
                  Air Conditioner Remotes
                </Link>
              </li>
              <li>
                <Link to="/category/set-top-box" className="hover:text-white transition-colors">
                  Tata Play & Airtel Remotes
                </Link>
              </li>
              <li>
                <Link to="/category/universal-remotes" className="hover:text-white transition-colors">
                  Universal Learning Remotes
                </Link>
              </li>
              <li>
                <Link to="/category/smart-tvs" className="hover:text-white transition-colors">
                  4K Smart LED Displays
                </Link>
              </li>
              <li>
                <Link to="/category/audio-sound" className="hover:text-white transition-colors">
                  Dolby Soundbars & Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Help & Tools */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Help & Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/track-order" className="hover:text-white transition-colors">
                  Track Your Package
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-white transition-colors">
                  Compare Remotes
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Remote Pairing Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About RemoteElectronic
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Store Visits
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Receive notifications for rare remote stock arrivals and discount coupons.
            </p>
            {subscribed ? (
              <p className="text-xs text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg">
                ✓ You are subscribed to RemoteElectronic alerts.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="mt-4 pt-4 border-t border-slate-800 space-y-1.5 text-[11px]">
              <Link to="/privacy" className="block hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="block hover:text-white transition-colors">
                Refund & Return Policy
              </Link>
              <Link to="/terms-of-service" className="block hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} RemoteElectronic. All rights reserved. Formerly Classic Electronics.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Client-side application created for GitHub user <span className="font-mono text-slate-400">Aman22kr</span>. Client persistence via browser LocalStorage.
            </p>
          </div>

          <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
            <span className="px-2 py-1 bg-slate-800 rounded border border-slate-700">UPI</span>
            <span className="px-2 py-1 bg-slate-800 rounded border border-slate-700">RuPay</span>
            <span className="px-2 py-1 bg-slate-800 rounded border border-slate-700">Visa</span>
            <span className="px-2 py-1 bg-slate-800 rounded border border-slate-700">Mastercard</span>
            <span className="px-2 py-1 bg-slate-800 rounded border border-slate-700">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
