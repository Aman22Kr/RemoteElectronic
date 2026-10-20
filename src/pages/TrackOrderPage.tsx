import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Package, 
  Search, 
  Truck, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight, 
  MapPin 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { MOCK_ORDERS } from '../data/products';
import { AdBanner } from '../components/common/AdBanner';

export const TrackOrderPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { orders } = useShop();
  const initialId = searchParams.get('id') || 'RE-849201';

  const [orderQuery, setOrderQuery] = useState(initialId);
  const [searchedId, setSearchedId] = useState(initialId);

  useEffect(() => {
    if (searchParams.get('id')) {
      setOrderQuery(searchParams.get('id') || '');
      setSearchedId(searchParams.get('id') || '');
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;
    const clean = orderQuery.trim().toUpperCase();
    setSearchedId(clean);
    setSearchParams({ id: clean });
  };

  // Find in user's localStorage placed orders or predefined mock tracking database
  const userOrder = orders.find((o) => o.id.toUpperCase() === searchedId.toUpperCase());
  const predefinedTracking = MOCK_ORDERS[searchedId.toUpperCase()];

  const isFound = !!userOrder || !!predefinedTracking;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <div className="bg-white border-b border-slate-200 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Track Your Remote & Electronics Shipment
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Real-time infrared quality inspection & express courier milestone updates across India.
            </p>

            {/* Tracking Search Input Form */}
            <form onSubmit={handleSearch} className="mt-6 max-w-md mx-auto flex gap-2">
              <div className="relative flex-1">
                <Package className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value.toUpperCase())}
                  placeholder="Enter Order ID (e.g. RE-849201)"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-mono font-bold focus:outline-none focus:border-indigo-500 uppercase"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
              >
                Track
              </button>
            </form>

            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono">
              <span>Sample order codes:</span>
              <button 
                onClick={() => { setOrderQuery('RE-849201'); setSearchedId('RE-849201'); }}
                className="text-indigo-600 underline font-semibold"
              >
                RE-849201
              </button>
              <span>·</span>
              <button 
                onClick={() => { setOrderQuery('RE-729103'); setSearchedId('RE-729103'); }}
                className="text-indigo-600 underline font-semibold"
              >
                RE-729103
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {isFound ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-8">
              {/* Status Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold text-slate-500">Order ID:</span>
                    <span className="text-base font-black font-mono text-indigo-700">{searchedId}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Carrier Partner: <span className="font-semibold text-slate-800">BlueDart Express Air Cargo</span>
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Current Milestone
                  </span>
                  <span className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 sm:justify-end mt-0.5">
                    <Truck className="w-4 h-4 text-emerald-600" />
                    {userOrder ? userOrder.status : predefinedTracking?.status}
                  </span>
                </div>
              </div>

              {/* Progress Milestones Timeline */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-6">
                  Shipment Tracking Progress
                </h3>

                <div className="relative border-l-2 border-indigo-200 ml-4 pl-6 space-y-6">
                  {(predefinedTracking?.steps || [
                    { name: 'Order Placed & Payment Verified', date: userOrder?.date || 'Today', done: true },
                    { name: 'IR Signal & Bluetooth Frequency Tested at Delhi Lab', date: 'Quality Inspection Cleared', done: true },
                    { name: 'Dispatched with BlueDart (AWB #829104)', date: 'Dispatched from Warehouse', done: true },
                    { name: 'Out for Local Delivery to Destination', date: userOrder?.estimatedDelivery || 'In Transit', done: false }
                  ]).map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Milestone Dot */}
                      <div className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 ${
                        step.done 
                          ? 'bg-indigo-600 border-white ring-4 ring-indigo-100' 
                          : 'bg-white border-slate-300'
                      }`} />

                      <p className={`text-xs font-bold ${step.done ? 'text-slate-900' : 'text-slate-400'}`}>
                        {step.name}
                      </p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {step.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details for user created order if matched */}
              {userOrder && (
                <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-2">Shipping Destination:</span>
                    <p className="text-slate-600 font-medium">{userOrder.customer.fullName}</p>
                    <p className="text-slate-500">{userOrder.customer.address}</p>
                    <p className="text-slate-500">{userOrder.customer.city}, {userOrder.customer.state} - {userOrder.customer.pinCode}</p>
                    <p className="text-slate-500 font-mono mt-1">Phone: {userOrder.customer.phone}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-semibold text-slate-800 block mb-2">Order Summary:</span>
                    <p className="text-slate-600">{userOrder.items.length} electronic products</p>
                    <p className="text-slate-600 font-mono font-bold mt-1">
                      Total: ₹{userOrder.total.toLocaleString('en-IN')} ({userOrder.paymentMethod})
                    </p>
                    <p className="text-emerald-700 text-[11px] font-semibold mt-1">
                      Signal Verification Certificate Attached
                    </p>
                  </div>
                </div>
              )}

              {/* Support Callout */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Package backed by RemoteElectronic 7-Day Replacement Guarantee</span>
                </div>

                <a
                  href="tel:08130733325"
                  className="font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Helpline (+91 81307 33325)</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">Order ID Not Found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Please double check your Order ID from your confirmation receipt or test with sample <code className="font-mono text-indigo-600">RE-849201</code>.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
