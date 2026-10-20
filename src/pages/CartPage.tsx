import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Trash2, 
  ArrowRight, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Tag, 
  RotateCcw, 
  Check 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { AdBanner } from '../components/common/AdBanner';

export const CartPage: React.FC = () => {
  const { 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    cartSubtotal, 
    cartShipping, 
    cartDiscountTotal, 
    cartTotal, 
    appliedPromo, 
    applyPromoCode, 
    removePromoCode 
  } = useShop();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;
    const res = applyPromoCode(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponInput('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <div className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-extrabold text-slate-900">
              Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs divide-y divide-slate-100">
                  {cart.map((item) => (
                    <div key={item.product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      {/* Product Thumbnail */}
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="w-20 h-20 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-semibold uppercase text-indigo-600 block">
                          {item.product.brand} · {item.product.partNumber}
                        </span>
                        <Link
                          to={`/product/${item.product.id}`}
                          className="text-sm font-bold text-slate-900 hover:text-indigo-600 line-clamp-1 mt-0.5"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-slate-500 mt-1">
                          Unit Price: <span className="font-mono font-semibold text-slate-700">₹{item.product.price.toLocaleString('en-IN')}</span>
                        </p>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                            className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 rounded-l-lg text-xs font-bold"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-mono text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                            className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 rounded-r-lg text-xs font-bold"
                          >
                            +
                          </button>
                        </div>

                        {/* Line Total */}
                        <div className="text-right w-24">
                          <span className="font-mono text-sm font-bold text-slate-900 block">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-2">
                  <Link to="/products" className="font-semibold text-indigo-600 hover:underline">
                    ← Continue Shopping For Other Remotes
                  </Link>
                  <span className="text-slate-400">All prices include applicable GST</span>
                </div>
              </div>

              {/* Order Summary & Checkout Box */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
                  <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                    Order Summary
                  </h3>

                  {/* Coupon Code Input */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Have a Coupon or Promo Code?
                    </label>
                    {appliedPromo ? (
                      <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                        <div className="flex items-center gap-1.5 font-mono font-bold">
                          <Tag className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{appliedPromo} Applied</span>
                        </div>
                        <button
                          onClick={removePromoCode}
                          className="text-rose-600 font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleApplyCoupon} className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                          placeholder="Try REMOTE10 or FREESHIP"
                          className="flex-1 px-3 py-2 text-xs uppercase font-mono border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                        <button
                          type="submit"
                          className="px-3.5 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
                        >
                          Apply
                        </button>
                      </form>
                    )}
                    {couponError && (
                      <p className="text-[11px] text-rose-600 mt-1">{couponError}</p>
                    )}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-2 text-xs border-t border-slate-100 pt-4">
                    <div className="flex justify-between text-slate-600">
                      <span>Items Subtotal</span>
                      <span className="font-mono text-slate-900">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                    </div>

                    {cartDiscountTotal > 0 && (
                      <div className="flex justify-between text-emerald-700 font-semibold">
                        <span>Coupon Discount</span>
                        <span className="font-mono">- ₹{cartDiscountTotal.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-slate-600">
                      <span>Shipping Delivery</span>
                      <span className="font-mono text-slate-900">
                        {cartShipping === 0 ? (
                          <span className="text-emerald-700 font-bold uppercase">FREE</span>
                        ) : (
                          `₹${cartShipping}`
                        )}
                      </span>
                    </div>

                    {cartSubtotal < 499 && (
                      <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">
                        Add ₹{(499 - cartSubtotal).toLocaleString('en-IN')} more to unlock FREE Express Shipping!
                      </p>
                    )}
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-slate-200 flex justify-between items-baseline">
                    <div>
                      <span className="text-base font-bold text-slate-900 block">Total Amount</span>
                      <span className="text-[11px] text-slate-400">Inclusive of all taxes</span>
                    </div>
                    <span className="text-2xl font-black text-indigo-700 font-mono">
                      ₹{cartTotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Proceed CTA */}
                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Badges */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>7-Day Replacement Guarantee if incompatible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-indigo-600" />
                      <span>Dispatched from Delhi testing warehouse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Your Cart is Currently Empty</h2>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Looking for a replacement remote control for your Samsung, LG, Sony TV or Inverter AC?
              </p>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-xs"
              >
                <span>Find Your Remote Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
