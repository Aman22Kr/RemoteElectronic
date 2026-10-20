import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Tv, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { HERO_IMAGE, SMART_TV_IMAGE } from '../data/products';
import { VideoPlaceholder } from '../components/common/VideoPlaceholder';
import { AdBanner } from '../components/common/AdBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Hero Header */}
        <div className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">
                About RemoteElectronic
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                India's Remote Control & Electronics Authority Since 1998
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                From our origins as a specialist electronics store in Anand Nagar, Delhi to a national supply network shipping certified replacement remotes for over 1,000 brands across India.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">
                Our Heritage & Mission
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                We Eliminate the Frustration of Incompatible Replacement Remotes
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                When a remote control breaks or is lost, consumers typically face two unpleasant extremes: paying exorbitant manufacturer prices or gambling on cheap generic remotes that fail after two weeks.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                RemoteElectronic was established to solve this problem. Every remote listed in our catalog is engineered to match original manufacturer IR frequencies, Bluetooth profiles, and key-travel ergonomics. Whether you own a 2012 Plasma display, a 2026 Neo QLED, or a smart inverter split AC, we guarantee exact compatibility.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <span className="text-2xl font-black text-indigo-600 font-mono">1998</span>
                  <p className="text-xs text-slate-500 mt-1">Established in Anand Nagar, Delhi</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <span className="text-2xl font-black text-indigo-600 font-mono">150K+</span>
                  <p className="text-xs text-slate-500 mt-1">Remote controls dispatched</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <span className="text-2xl font-black text-indigo-600 font-mono">1,000+</span>
                  <p className="text-xs text-slate-500 mt-1">Brand device profiles tested</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <span className="text-2xl font-black text-indigo-600 font-mono">4.8 / 5</span>
                  <p className="text-xs text-slate-500 mt-1">Average verified review rating</p>
                </div>
              </div>
            </div>

            {/* Video Placeholder space */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-3">
                  Our Delhi Quality Inspection Process
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Watch how our technicians test every remote button waveform before packing.
                </p>
                <VideoPlaceholder 
                  title="Delhi Lab Quality Inspection Tour"
                  subtitle="Testing IR frequency modulation & drop resistance"
                />
              </div>
            </div>
          </div>

          {/* Testing Laboratory & Guarantee Section */}
          <div className="mt-20 bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Uncompromising Quality
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                The RemoteElectronic 4-Point Testing Guarantee
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
                <h4 className="font-bold text-slate-900 text-sm">Diode Frequency Analysis</h4>
                <p className="text-slate-500">
                  Oscilloscope verification that the infrared signal operates at the exact OEM 36kHz, 38kHz or 56kHz pulse.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
                <h4 className="font-bold text-slate-900 text-sm">Key-Travel Tactility</h4>
                <p className="text-slate-500">
                  Every button dome is tested for crisp tactile feedback and rated for a minimum 200,000 presses.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">3</div>
                <h4 className="font-bold text-slate-900 text-sm">Drop-Resistant Housing</h4>
                <p className="text-slate-500">
                  Manufactured from high-density virgin ABS plastic that withstands regular coffee table drops.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">4</div>
                <h4 className="font-bold text-slate-900 text-sm">7-Day Fit Guarantee</h4>
                <p className="text-slate-500">
                  If the remote does not pair with your TV or climate unit, enjoy an immediate replacement or full refund.
                </p>
              </div>
            </div>
          </div>

          {/* Store Location Card */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Visit Our Physical Store
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  RemoteElectronic Delhi Flagship Store
                </h3>
                <p className="text-slate-300 text-xs mt-2 max-w-xl">
                  A-268, Main Road, Anand Nagar, Nithari, Kirari Suleman Nagar, Delhi, 110086. Open 7 days a week from 9:00 AM to 9:00 PM for on-spot testing and model matching.
                </p>
              </div>

              <Link
                to="/contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs flex items-center gap-2"
              >
                <span>Get Directions & Contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
