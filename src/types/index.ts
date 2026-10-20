export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'smart-tv-remotes' | 'ac-remotes' | 'smart-tvs' | 'audio-sound' | 'set-top-box' | 'universal-remotes';
  categoryLabel: string;
  brand: string;
  partNumber: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  image: string;
  secondaryImages?: string[];
  features: string[];
  compatibleModels: string[];
  description: string;
  specs: {
    transmissionType: string;
    operatingDistance: string;
    batteryRequired: string;
    voiceControl: boolean;
    dimensions?: string;
    warranty: string;
  };
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
  };
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Confirmed' | 'Testing & Quality Check' | 'Dispatched' | 'Out for Delivery' | 'Delivered';
  carrier?: string;
  trackingNumber?: string;
  estimatedDelivery: string;
  paymentMethod: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  deviceUsed?: string;
}
