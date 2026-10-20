import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, Review } from '../types';
import { PRODUCTS, SAMPLE_REVIEWS } from '../data/products';

interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  compareList: string[];
  orders: Order[];
  reviews: Review[];
  recentlyViewed: string[];
  appliedPromo: string | null;
  promoDiscount: number;
  toasts: ToastNotification[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartShipping: number;
  cartDiscountTotal: number;
  cartTotal: number;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  toggleCompare: (productId: string) => boolean;
  isCompared: (productId: string) => boolean;
  clearCompare: () => void;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  createOrder: (orderData: Omit<Order, 'id' | 'date' | 'status' | 'estimatedDelivery'>) => Order;
  addReview: (review: Omit<Review, 'id' | 'date' | 'verifiedPurchase'>) => void;
  recordRecentlyViewed: (productId: string) => void;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const STORAGE_KEYS = {
  CART: 'remote_electronic_cart_v1',
  WISHLIST: 'remote_electronic_wishlist_v1',
  COMPARE: 'remote_electronic_compare_v1',
  ORDERS: 'remote_electronic_orders_v1',
  REVIEWS: 'remote_electronic_reviews_v1',
  RECENT: 'remote_electronic_recent_v1',
  PROMO: 'remote_electronic_promo_v1'
};

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [compareList, setCompareList] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPARE);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      return saved ? JSON.parse(saved) : SAMPLE_REVIEWS;
    } catch {
      return SAMPLE_REVIEWS;
    }
  });

  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECENT);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedPromo, setAppliedPromo] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.PROMO) || null;
    } catch {
      return null;
    }
  });

  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(compareList));
    } catch (e) {
      console.warn('Failed to save compare to localStorage', e);
    }
  }, [compareList]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    } catch (e) {
      console.warn('Failed to save orders to localStorage', e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
    } catch (e) {
      console.warn('Failed to save reviews to localStorage', e);
    }
  }, [reviews]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recentlyViewed));
    } catch (e) {
      console.warn('Failed to save recently viewed to localStorage', e);
    }
  }, [recentlyViewed]);

  useEffect(() => {
    try {
      if (appliedPromo) {
        localStorage.setItem(STORAGE_KEYS.PROMO, appliedPromo);
      } else {
        localStorage.removeItem(STORAGE_KEYS.PROMO);
      }
    } catch (e) {
      console.warn('Failed to save promo to localStorage', e);
    }
  }, [appliedPromo]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name.slice(0, 32)}..." to cart`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from saved wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to wishlist', 'success');
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const toggleCompare = (productId: string): boolean => {
    if (compareList.includes(productId)) {
      setCompareList((prev) => prev.filter((id) => id !== productId));
      showToast('Removed from compare list', 'info');
      return false;
    }
    if (compareList.length >= 4) {
      showToast('You can compare up to 4 items simultaneously', 'warning');
      return false;
    }
    setCompareList((prev) => [...prev, productId]);
    showToast('Added to product comparison', 'success');
    return true;
  };

  const isCompared = (productId: string) => compareList.includes(productId);

  const clearCompare = () => {
    setCompareList([]);
    showToast('Compare list cleared', 'info');
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'REMOTE10') {
      setAppliedPromo('REMOTE10');
      showToast('Promo code REMOTE10 applied: 10% discount added!', 'success');
      return { success: true, message: '10% discount applied successfully!' };
    }
    if (clean === 'FREESHIP') {
      setAppliedPromo('FREESHIP');
      showToast('Promo code FREESHIP applied: Free express shipping unlocked!', 'success');
      return { success: true, message: 'Free shipping applied!' };
    }
    if (clean === 'CLASSIC20') {
      setAppliedPromo('CLASSIC20');
      showToast('Promo code CLASSIC20 applied: Special ₹200 off!', 'success');
      return { success: true, message: '₹200 discount applied!' };
    }
    return { success: false, message: 'Invalid or expired coupon code. Try REMOTE10 or FREESHIP' };
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast('Promo code removed', 'info');
  };

  const promoDiscount = appliedPromo === 'REMOTE10' ? 0.1 : appliedPromo === 'CLASSIC20' ? 200 : 0;

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  
  // Free shipping over ₹499 or with FREESHIP promo
  const cartShipping = cartSubtotal >= 499 || appliedPromo === 'FREESHIP' || cartSubtotal === 0 ? 0 : 50;

  const cartDiscountTotal =
    appliedPromo === 'REMOTE10'
      ? Math.round(cartSubtotal * 0.1)
      : appliedPromo === 'CLASSIC20'
      ? Math.min(200, cartSubtotal)
      : 0;

  const cartTotal = Math.max(0, cartSubtotal - cartDiscountTotal + cartShipping);

  const createOrder = (orderData: Omit<Order, 'id' | 'date' | 'status' | 'estimatedDelivery'>): Order => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const newOrder: Order = {
      ...orderData,
      id: `RE-${randomSuffix}`,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Confirmed',
      estimatedDelivery: 'Within 2-3 Business Days',
      carrier: 'BlueDart Express',
      trackingNumber: `BD${Math.floor(10000000 + Math.random() * 90000000)}`
    };
    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  const addReview = (reviewData: Omit<Review, 'id' | 'date' | 'verifiedPurchase'>) => {
    const newReview: Review = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      verifiedPurchase: true
    };
    setReviews((prev) => [newReview, ...prev]);
    showToast('Thank you! Your verified review has been submitted.', 'success');
  };

  const recordRecentlyViewed = (productId: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 8);
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        compareList,
        orders,
        reviews,
        recentlyViewed,
        appliedPromo,
        promoDiscount,
        toasts,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        cartShipping,
        cartDiscountTotal,
        cartTotal,
        toggleWishlist,
        isWishlisted,
        toggleCompare,
        isCompared,
        clearCompare,
        applyPromoCode,
        removePromoCode,
        createOrder,
        addReview,
        recordRecentlyViewed,
        showToast
      }}
    >
      {children}
      {/* Toast Notification Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-4 py-3 rounded-lg shadow-lg text-sm font-medium border flex items-center justify-between transition-all duration-300 animate-slide-up ${
              toast.type === 'success'
                ? 'bg-slate-900 text-white border-slate-800'
                : toast.type === 'warning'
                ? 'bg-amber-50 text-amber-900 border-amber-300'
                : 'bg-white text-slate-800 border-slate-200'
            }`}
          >
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
