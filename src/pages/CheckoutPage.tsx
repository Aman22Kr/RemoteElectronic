import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  QrCode, 
  Banknote, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Lock 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Order } from '../types';
import { AdBanner } from '../components/common/AdBanner';

export const CheckoutPage: React.FC = () => {
  const { 
    cart, 
    cartSubtotal, 
    cartShipping, 
    cartDiscountTotal, 
    cartTotal, 
    createOrder 
  } = useShop();

  const navigate = useNavigate();

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Delhi NCR');
  const [pinCode, setPinCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod' | 'netbanking'>('upi');

  // Completed Order Modal
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  if (cart.length === 0 && !completedOrder) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <div className="max-w-md mx-auto py-20 px-4 text-center">
          <h2 className="text-xl font-bold text-slate-900">Your Cart is Empty</h2>
          <p className="text-xs text-slate-500 mt-2">Add items to cart before proceeding to checkout.</p>
          <Link
            to="/products"
            className="mt-6 inline-block px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
          >
            Explore Catalog
          </Link>
        </div>
        <AdBanner />
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !pinCode) {
      alert('Please fill out all mandatory shipping address fields');
      return;
    }

    const order = createOrder({
      customer: {
        fullName,
        email: email || 'customer@remoteelectronic.com',
        phone,
        address,
        city,
        state,
        pinCode
      },
      items: cart.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image
      })),
      subtotal: cartSubtotal,
      discount: cartDiscountTotal,
      shipping: cartShipping,
      total: cartTotal,
      paymentMethod:
        paymentMethod === 'upi'
          ? 'UPI Instant Payment (GPay / PhonePe / Paytm)'
          : paymentMethod === 'card'
          ? 'Debit / Credit Card'
          : paymentMethod === 'cod'
          ? 'Cash on Delivery (COD)'
          : 'Net Banking'
    });

    setCompletedOrder(order);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <div className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-slate-900">
              Secure Checkout
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <Lock className="w-3.5 h-3.5" />
              <span>256-Bit SSL Encrypted</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Delivery Address & Payment */}
            <div className="lg:col-span-7 space-y-6">
              {/* Delivery Address Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-sm font-bold text-slate-900">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span>1. Delivery Address (India Nationwide Dispatch)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aman Kumar"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Mobile Number (for Courier SMS) *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="font-semibold text-slate-700 block mb-1">Email Address (for Invoice & Tracking)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. aman@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="font-semibold text-slate-700 block mb-1">Flat / House No. & Street Address *</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="House No., Street Name, Landmark"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. New Delhi"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">State *</label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-white"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Other States">Other Indian State</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">PIN Code *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                      placeholder="e.g. 110086"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-sm font-bold text-slate-900">
                  <CreditCard className="w-4 h-4 text-indigo-600" />
                  <span>2. Select Payment Method</span>
                </div>

                <div className="space-y-3">
                  <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50/40 shadow-2xs' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="mt-1 text-indigo-600 accent-indigo-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">UPI Instant Payment (Fastest)</span>
                        <QrCode className="w-4 h-4 text-indigo-600" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Pay via Google Pay, PhonePe, Paytm, BHIM, or any UPI App with Zero Surcharge.
                      </p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50/40 shadow-2xs' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="mt-1 text-indigo-600 accent-indigo-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">Debit / Credit Card (Visa, RuPay, Mastercard)</span>
                        <CreditCard className="w-4 h-4 text-slate-600" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Supports domestic RuPay, Visa, Mastercard with OTP 3D secure authentication.
                      </p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'cod' ? 'border-indigo-600 bg-indigo-50/40 shadow-2xs' : 'border-slate-200 hover:bg-slate-50'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-1 text-indigo-600 accent-indigo-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">Cash on Delivery (COD)</span>
                        <Banknote className="w-4 h-4 text-emerald-600" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Pay upon doorstep arrival. We will dispatch after SMS confirmation.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Order Review */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Items in Order ({cart.length})
                </h3>

                <div className="max-h-60 overflow-y-auto space-y-3 pr-1">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3 text-xs">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-lg bg-slate-100 object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 truncate">{item.product.name}</p>
                        <p className="text-[11px] text-slate-500 font-mono">
                          Qty: {item.quantity} × ₹{item.product.price.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <span className="font-mono font-bold text-slate-900 shrink-0">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-mono">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {cartDiscountTotal > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Discount</span>
                      <span className="font-mono">- ₹{cartDiscountTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span className="font-mono text-slate-900">
                      {cartShipping === 0 ? 'FREE' : `₹${cartShipping}`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline font-bold">
                    <span className="text-sm text-slate-900">Total Payable</span>
                    <span className="text-xl text-indigo-700 font-mono font-black">
                      ₹{cartTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Place Order & Confirm Dispatch</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  By placing this order you accept RemoteElectronic terms of service and guarantee policies.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmed Order Modal */}
      {completedOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              Order Confirmed!
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Your remote controls have entered the signal quality testing queue.
            </p>

            <div className="my-6 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-left space-y-2 text-xs">
              <div className="flex justify-between font-mono">
                <span className="text-slate-500">Order ID:</span>
                <span className="font-bold text-indigo-600">{completedOrder.id}</span>
              </div>
              <div className="flex justify-between font-mono">
                <span className="text-slate-500">AWB Tracking:</span>
                <span className="font-semibold text-slate-800">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery To:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[200px]">{completedOrder.customer.fullName}, {completedOrder.customer.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount Paid:</span>
                <span className="font-bold font-mono text-emerald-700">₹{completedOrder.total.toLocaleString('en-IN')} ({completedOrder.paymentMethod})</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={`/track-order?id=${completedOrder.id}`}
                className="flex-1 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-xs"
              >
                Track Order Live Status
              </Link>

              <Link
                to="/products"
                className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors"
              >
                Return to Store
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
