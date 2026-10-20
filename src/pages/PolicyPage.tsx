import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, RotateCcw, FileText, Truck, ArrowLeft } from 'lucide-react';
import { AdBanner } from '../components/common/AdBanner';

export const PolicyPage: React.FC = () => {
  const location = useLocation();

  const getInitialTab = () => {
    if (location.pathname.includes('refund')) return 'refund';
    if (location.pathname.includes('terms')) return 'terms';
    if (location.pathname.includes('shipping')) return 'shipping';
    return 'privacy';
  };

  const [activeTab, setActiveTab] = useState<'privacy' | 'refund' | 'terms' | 'shipping'>(getInitialTab());

  useEffect(() => {
    setActiveTab(getInitialTab());
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <div className="bg-white border-b border-slate-200 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-indigo-600 font-semibold mb-3 hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Store
            </Link>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Customer Policies & Guarantees
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Transparent terms governing your orders at RemoteElectronic
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-slate-200 text-xs mb-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'privacy'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setActiveTab('refund')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'refund'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refund & 7-Day Replacement</span>
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'terms'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </button>

            <button
              onClick={() => setActiveTab('shipping')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'shipping'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Shipping & Delivery Policy</span>
            </button>
          </div>

          {/* Content Container */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-2xs text-xs text-slate-700 space-y-6 leading-relaxed">
            {activeTab === 'privacy' && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-slate-900">RemoteElectronic Privacy Policy</h2>
                <p>
                  At RemoteElectronic (operating formerly as Classic Electronics Delhi), we take consumer data privacy seriously. This Privacy Statement describes our practices regarding the information collected when you browse our electronic catalog, place orders, or contact our customer support.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">1. Information We Collect</h3>
                <p>
                  When you submit an order or inquiry, we collect your name, mobile contact number, shipping destination address, and email address solely for shipment processing and delivery notifications via BlueDart or Delhivery.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">2. Local Storage Technology</h3>
                <p>
                  This application uses browser LocalStorage to retain your shopping cart contents, saved wishlist remotes, comparison choices, and tracking IDs locally on your computer or mobile device. LocalStorage is strictly private to your browser session.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">3. Zero Third-Party Advertising Trackers</h3>
                <p>
                  RemoteElectronic does not sell or share customer contact records with external marketing brokers. All customer telephone numbers are strictly utilized for delivery verification.
                </p>
              </div>
            )}

            {activeTab === 'refund' && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-slate-900">7-Day Hassle-Free Replacement & Refund Policy</h2>
                <p>
                  We understand that selecting the exact replacement remote control for a television, air conditioner, or set-top box can occasionally be tricky due to minor model revisions across manufacturing years.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">1. 7-Day Incompatibility Exchange</h3>
                <p>
                  If you receive a remote that does not pair with your TV or climate unit, contact our helpline at <span className="font-bold text-indigo-600">+91 81307 33325</span> within 7 days of delivery. Our Delhi technicians will cross-reference your TV model sticker and dispatch the correct matching remote free of exchange charge.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">2. Conditions for Refund</h3>
                <p>
                  Items must be in original physical condition without cracks, scratches, or missing battery covers. If a compatible replacement model is unavailable in our inventory, a 100% refund will be issued to your original payment method.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">3. 6-Month Warranty</h3>
                <p>
                  All RemoteElectronic remotes are backed by a 6-month replacement warranty covering infrared diode, Bluetooth transmitter, or internal circuit matrix failure.
                </p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-slate-900">Terms of Service</h2>
                <p>
                  By accessing and ordering from RemoteElectronic, you agree to these commercial terms. RemoteElectronic is an independent supplier of OEM and high-grade universal replacement remote controls, displays, and home electronics.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">1. Product Compatibility & Descriptions</h3>
                <p>
                  Product part numbers (e.g. BN59, MR22, ARC480) are referenced to assist customers in identifying compatible equipment for brands including Samsung, LG, Sony, Daikin, and others. Trademarks belong to their respective corporate owners.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">2. Order Fulfillment & Pre-Testing</h3>
                <p>
                  Every unit undergoes infrared and Bluetooth waveform verification before packing. In the event of temporary out-of-stock conditions, customers will be notified immediately with an equivalent certified alternative or instant refund.
                </p>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <h2 className="text-base font-bold text-slate-900">Shipping & Delivery Guidelines</h2>
                <p>
                  All packages are dispatched directly from our central Delhi distribution center located at Anand Nagar, Nithari, Kirari Suleman Nagar, Delhi, 110086.
                </p>
                <h3 className="font-bold text-slate-900 text-sm pt-2">1. Delivery Timeframes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Delhi NCR:</strong> 24 to 48 hours</li>
                  <li><strong>Tier 1 Metro Cities:</strong> 2 to 3 business days via BlueDart Air</li>
                  <li><strong>Rest of India:</strong> 3 to 5 business days via Delhivery Express</li>
                </ul>
                <h3 className="font-bold text-slate-900 text-sm pt-2">2. Free Delivery Threshold</h3>
                <p>
                  Orders of ₹499 and above receive complimentary Free Express Shipping. Orders under ₹499 carry a flat ₹50 shipping fee.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
