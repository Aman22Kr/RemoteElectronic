import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Trash2, ShoppingBag, Check, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { AdBanner } from '../components/common/AdBanner';

export const ComparePage: React.FC = () => {
  const { compareList, products, toggleCompare, clearCompare, addToCart } = useShop();

  const comparedProducts = products.filter((p) => compareList.includes(p.id));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <div className="bg-white border-b border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Compare Remote Specifications ({comparedProducts.length} / 4)
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Side-by-side feature and signal compatibility comparison
              </p>
            </div>

            {comparedProducts.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Comparison</span>
              </button>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {comparedProducts.length > 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-2xs">
              <table className="w-full text-left text-xs divide-y divide-slate-200 min-w-[700px]">
                <tbody className="divide-y divide-slate-100">
                  {/* Row 1: Product Header */}
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900 w-44">Product</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 align-top w-64">
                        <div className="relative">
                          <button
                            onClick={() => toggleCompare(p.id)}
                            className="absolute -top-1 -right-1 p-1 bg-white rounded-full border border-slate-200 text-slate-400 hover:text-rose-600"
                            title="Remove"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                          <img
                            src={p.image}
                            alt={p.name}
                            referrerPolicy="no-referrer"
                            className="w-24 h-24 object-cover rounded-xl bg-slate-100 border border-slate-200 mb-2"
                          />
                          <span className="text-[10px] uppercase font-bold text-indigo-600 block">{p.brand}</span>
                          <Link to={`/product/${p.id}`} className="font-bold text-slate-900 hover:text-indigo-600 line-clamp-2 mt-0.5">
                            {p.name}
                          </Link>
                          <div className="mt-2 text-base font-bold font-mono text-slate-900">
                            ₹{p.price.toLocaleString('en-IN')}
                          </div>
                          <button
                            onClick={() => addToCart(p)}
                            className="mt-3 w-full py-1.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Row 2: Part Number */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Model Part No.</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 font-mono font-medium text-slate-800">{p.partNumber}</td>
                    ))}
                  </tr>

                  {/* Row 3: Category */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Category</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 text-slate-800">{p.categoryLabel}</td>
                    ))}
                  </tr>

                  {/* Row 4: Transmission Type */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Transmission Signal</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 text-slate-800">{p.specs.transmissionType}</td>
                    ))}
                  </tr>

                  {/* Row 5: Operating Range */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Operating Distance</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 text-slate-800">{p.specs.operatingDistance}</td>
                    ))}
                  </tr>

                  {/* Row 6: Voice Assistant */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Voice Search Mic</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4">
                        {p.specs.voiceControl ? (
                          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                            <Check className="w-4 h-4" /> Yes (Bluetooth Mic)
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-slate-400">
                            <X className="w-4 h-4" /> No (Standard IR)
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Row 7: Battery Required */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Battery Required</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 text-slate-800">{p.specs.batteryRequired}</td>
                    ))}
                  </tr>

                  {/* Row 8: Warranty */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Warranty</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 text-indigo-700 font-medium">{p.specs.warranty}</td>
                    ))}
                  </tr>

                  {/* Row 9: Compatibility summary */}
                  <tr>
                    <td className="p-4 font-semibold text-slate-500">Compatible Series</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-4 text-slate-700 text-[11px] leading-relaxed">
                        {p.compatibleModels.join(', ')}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">No Products in Comparison</h2>
              <p className="text-xs text-slate-500 mt-1">
                Click the compare icon on any remote or television card to evaluate specifications side-by-side.
              </p>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors"
              >
                <span>Browse Products</span>
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
