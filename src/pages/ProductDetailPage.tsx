import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  ShoppingBag, 
  Heart, 
  Scale, 
  Check, 
  Share2, 
  ChevronRight, 
  Sparkles, 
  Info, 
  Zap, 
  MessageSquare 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/common/ProductCard';
import { VideoPlaceholder } from '../components/common/VideoPlaceholder';
import { AdBanner } from '../components/common/AdBanner';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { 
    products, 
    addToCart, 
    toggleWishlist, 
    isWishlisted, 
    toggleCompare, 
    isCompared, 
    reviews, 
    addReview, 
    recordRecentlyViewed, 
    showToast 
  } = useShop();

  const product = products.find((p) => p.id === id || p.slug === id);

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'compatibility' | 'pairing' | 'reviews'>('specs');

  // Review Form state
  const [authorName, setAuthorName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      recordRecentlyViewed(product.id);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Product Not Found</h2>
          <p className="text-sm text-slate-500 mt-2">The requested electronic item or remote does not exist.</p>
          <Link
            to="/products"
            className="mt-6 inline-block px-5 py-2.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg"
          >
            Back to Catalog
          </Link>
        </div>
        <AdBanner />
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const compared = isCompared(product.id);
  const productReviews = reviews.filter((r) => r.productId === product.id);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard', 'info');
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewComment.trim()) {
      showToast('Please provide your name and review feedback', 'warning');
      return;
    }
    addReview({
      productId: product.id,
      author: authorName.trim(),
      rating: reviewRating,
      comment: reviewComment.trim(),
      deviceUsed: deviceName.trim() || product.brand
    });
    setAuthorName('');
    setReviewComment('');
    setDeviceName('');
    setShowReviewForm(false);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/products" className="hover:text-slate-900">All Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to={`/category/${product.category}`} className="hover:text-slate-900">
              {product.categoryLabel}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-800 font-medium truncate max-w-xs">{product.name}</span>
          </div>
        </div>

        {/* Main PDP 2-Column Split */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Gallery & Video Demonstration */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-4 shadow-2xs">
                <div className="relative aspect-4/3 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedImage || product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-1 rounded">
                    Part: {product.partNumber}
                  </span>
                </div>

                {/* Secondary image thumbnails */}
                {product.secondaryImages && product.secondaryImages.length > 1 && (
                  <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
                    {product.secondaryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`w-16 h-16 rounded-lg border-2 overflow-hidden shrink-0 transition-all ${
                          selectedImage === img ? 'border-indigo-600 shadow-2xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Blank square space as requested for video demonstration placeholder */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Product Video & Pairing Demonstration
                </div>
                <VideoPlaceholder 
                  title={`${product.brand} Pairing Tutorial`}
                  subtitle="Demonstrating infrared signal calibration and Bluetooth voice setup"
                  aspectSquare={true}
                />
              </div>
            </div>

            {/* Right Column: Contiguous Purchase Module */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
                <div>
                  {/* Brand & Part number */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold uppercase tracking-wider text-indigo-600">
                        {product.brand}
                      </span>
                      <span>·</span>
                      <span className="font-mono">SKU: {product.id.toUpperCase()}</span>
                    </div>

                    <button
                      onClick={handleShare}
                      className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100"
                      title="Share product link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {product.name}
                  </h1>

                  {/* Rating & reviews shortcut */}
                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-600">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-mono font-bold text-slate-800">{product.rating}</span>
                    <span>·</span>
                    <button
                      onClick={() => setActiveTab('reviews')}
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      {productReviews.length} Verified Customer Reviews
                    </button>
                  </div>
                </div>

                {/* Price block */}
                <div className="pt-4 border-t border-slate-100 flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-900 font-mono">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="text-sm text-slate-400 line-through font-mono">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {discountPercent}% OFF (Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')})
                      </span>
                    </>
                  )}
                </div>

                {/* Stock status */}
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-700">
                    In Stock ({product.stockCount} units available)
                  </span>
                  <span className="text-slate-400">· Ready for Delhi Express dispatch</span>
                </div>

                {/* Key Highlights list */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 text-xs text-slate-700">
                  <span className="font-semibold text-slate-900 block mb-1">Key Advantages:</span>
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Quantity and CTA actions */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                    <label className="text-xs font-semibold text-slate-700">Quantity:</label>
                    <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 text-sm font-bold"
                      >
                        -
                      </button>
                      <span className="px-4 py-1.5 text-xs font-mono font-bold text-slate-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => addToCart(product, quantity)}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={handleBuyNow}
                      className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Buy Now (Instant Checkout)</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-600">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="flex items-center gap-1.5 hover:text-rose-600 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                    </button>

                    <button
                      onClick={() => toggleCompare(product.id)}
                      className="flex items-center gap-1.5 hover:text-amber-600 transition-colors"
                    >
                      <Scale className="w-4 h-4" />
                      <span>{compared ? 'In Compare List' : 'Compare Specifications'}</span>
                    </button>
                  </div>
                </div>

                {/* Delivery & Assurance Strip */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Free shipping on orders ₹499+</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <RotateCcw className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>7-Day Replacement Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{product.specs.warranty}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Info className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>Call +91 81307 33325 for help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Tabs: Specifications, Compatible Models, Pairing Guide, Reviews */}
          <div className="mt-14 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="flex border-b border-slate-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-4 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === 'specs'
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('compatibility')}
                className={`px-6 py-4 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === 'compatibility'
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Compatible Models ({product.compatibleModels.length})
              </button>
              <button
                onClick={() => setActiveTab('pairing')}
                className={`px-6 py-4 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === 'pairing'
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Pairing & Setup Instructions
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-4 text-xs font-bold transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === 'reviews'
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50/40'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                Customer Reviews ({productReviews.length})
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {activeTab === 'specs' && (
                <div className="space-y-6">
                  <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
                    {product.description}
                  </p>

                  <div className="max-w-2xl border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <div className="grid grid-cols-2 p-3 bg-slate-50 border-b border-slate-200 font-semibold text-slate-700">
                      <span>Specification</span>
                      <span>Details</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 border-b border-slate-100">
                      <span className="text-slate-500">Transmission Signal</span>
                      <span className="font-medium text-slate-800">{product.specs.transmissionType}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 border-b border-slate-100">
                      <span className="text-slate-500">Operating Distance</span>
                      <span className="font-medium text-slate-800">{product.specs.operatingDistance}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 border-b border-slate-100">
                      <span className="text-slate-500">Battery Type</span>
                      <span className="font-medium text-slate-800">{product.specs.batteryRequired}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 border-b border-slate-100">
                      <span className="text-slate-500">Voice Assistant Control</span>
                      <span className="font-medium text-slate-800">{product.specs.voiceControl ? 'Yes (Microphone Integrated)' : 'No (Standard Keys)'}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 border-b border-slate-100">
                      <span className="text-slate-500">Warranty Coverage</span>
                      <span className="font-medium text-slate-800">{product.specs.warranty}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3">
                      <span className="text-slate-500">Tested Standard</span>
                      <span className="font-medium text-emerald-700">RemoteElectronic Delhi Lab Certified</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'compatibility' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">
                    Verified Compatible Devices and Replacement Part Numbers:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {product.compatibleModels.map((model, idx) => (
                      <li key={idx} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span className="font-medium">{model}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 pt-2">
                    Don't see your exact TV or AC model? Call our Delhi technical store at <a href="tel:08130733325" className="text-indigo-600 font-semibold underline">+91 81307 33325</a> with your model sticker and we will find your direct replacement.
                  </p>
                </div>
              )}

              {activeTab === 'pairing' && (
                <div className="space-y-4 max-w-2xl text-xs text-slate-700">
                  <h4 className="text-sm font-bold text-slate-900">
                    How to Pair This Remote with Your Device:
                  </h4>
                  {product.specs.voiceControl ? (
                    <div className="space-y-3">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-900 mb-1">Step 1: Insert New AAA Alkaline Batteries</p>
                        <p className="text-slate-600">Ensure fresh batteries are installed with correct polarity (+ / -).</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-900 mb-1">Step 2: Turn on TV and Point Remote</p>
                        <p className="text-slate-600">Stand within 1 meter of the TV screen.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-900 mb-1">Step 3: Hold the Pairing Buttons</p>
                        <p className="text-slate-600">Press and hold the <span className="font-bold text-indigo-600">Return / Back</span> and <span className="font-bold text-indigo-600">Play/Pause</span> (or Home) buttons simultaneously for 3 to 5 seconds until the pairing animation appears on screen.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <p className="font-semibold text-slate-900 mb-1">Zero Setup Required</p>
                        <p className="text-slate-600">This remote operates on standardized infrared frequencies. Insert fresh AAA batteries, point at the device sensor, and it will immediately respond without any code entry needed.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Customer Feedback</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Verified buyers who replaced their device remotes</p>
                    </div>

                    <button
                      onClick={() => setShowReviewForm(!showReviewForm)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      {showReviewForm ? 'Cancel' : 'Write a Review'}
                    </button>
                  </div>

                  {/* Review form */}
                  {showReviewForm && (
                    <form onSubmit={handleSubmitReview} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 max-w-xl">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">Submit Your Review</h5>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-slate-700 block mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            placeholder="e.g. Ramesh Patel"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-medium text-slate-700 block mb-1">Device Model Used</label>
                          <input
                            type="text"
                            value={deviceName}
                            onChange={(e) => setDeviceName(e.target.value)}
                            placeholder="e.g. Samsung 55 Crystal 4K"
                            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1">Rating</label>
                        <select
                          value={reviewRating}
                          onChange={(e) => setReviewRating(Number(e.target.value))}
                          className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                        >
                          <option value="5">⭐⭐⭐⭐⭐ 5 Stars - Excellent</option>
                          <option value="4">⭐⭐⭐⭐ 4 Stars - Very Good</option>
                          <option value="3">⭐⭐⭐ 3 Stars - Average</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1">Review Comments *</label>
                        <textarea
                          required
                          rows={3}
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          placeholder="How did the remote perform? Was pairing easy?"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                        />
                      </div>

                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
                      >
                        Submit Verified Review
                      </button>
                    </form>
                  )}

                  {/* Existing Reviews */}
                  <div className="space-y-4">
                    {productReviews.length > 0 ? (
                      productReviews.map((rev) => (
                        <div key={rev.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-xs text-slate-900">{rev.author}</span>
                              {rev.verifiedPurchase && (
                                <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] font-mono text-slate-400">{rev.date}</span>
                          </div>
                          <div className="flex text-amber-500 mb-2">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">{rev.comment}</p>
                          {rev.deviceUsed && (
                            <span className="text-[10px] font-mono text-slate-400 mt-2 block">
                              Paired with: {rev.deviceUsed}
                            </span>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-500 italic">No reviews yet for this model. Be the first to review!</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Customers Also Looked At
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Ad Section at the bottom of the page */}
      <AdBanner />
    </div>
  );
};
