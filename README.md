# RemoteElectronic — Official Online Electronics & Remote Store

A high-fidelity, multi-page static web application recreating and modernizing the electronic storefront inspired by **The Classic Electronics** under the new brand identity **RemoteElectronic** for GitHub user **Aman22kr**.

Built with **Vite**, **React**, **TypeScript**, **Tailwind CSS**, and **React Router**, with full **LocalStorage** data persistence and automated static deployment to **GitHub Pages via GitHub Actions**.

---

## 🌟 Key Application Features

### 1. Multi-Page Architecture
- **Home Page (`/`)**: High-impact hero banner, verified brand compatibility strip (Samsung, LG, Sony, Daikin, Philips, Panasonic, Xiaomi, etc.), electronic categories, featured best-sellers, 3-step remote identification guide, video demonstration placeholder space, customer testimonials, and bottom advertisement banner.
- **Product Catalog (`#/products`)**: Complete catalog with live search, category selection, brand filtering, max price slider, in-stock toggle, voice remote filter, and multiple sorting options.
- **Product Detail View (`#/product/:id`)**: Contiguous purchase module, multi-angle image gallery, detailed specifications (transmission type, range, battery, warranty), compatible equipment lists, pairing procedures, verified buyer reviews, and "Write a Review" submission.
- **Category Pages (`#/category/:slug`)**: Tailored collections for Smart TV Remotes, AC Remotes, 4K Smart TVs, Dolby Soundbars, Universal Remotes, and Set-Top Box Remotes.
- **Shopping Cart (`#/cart`)**: Item management, quantity steppers, live subtotal, promo code redemption (`REMOTE10`, `FREESHIP`, `CLASSIC20`), free shipping threshold calculator, and checkout redirect.
- **Checkout Demo (`#/checkout`)**: Full shipping address form, payment method selector (UPI, Cards, Cash on Delivery), order validation, and instant confirmation receipt modal that stores orders to LocalStorage.
- **Track Order (`#/track-order`)**: Interactive package milestone tracking (Order Confirmed → Lab Quality Tested → Dispatched → Out for Delivery) supporting newly placed orders as well as sample codes (`RE-849201`, `RE-729103`).
- **Product Comparison (`#/compare`)**: Side-by-side specification comparison matrix for up to 4 devices.
- **Wishlist (`#/wishlist`)**: Saved products with one-click "Move All to Cart".
- **About RemoteElectronic (`#/about`)**: Brand story honoring its 1998 founding in Anand Nagar, Delhi, its physical store heritage, and its 4-point signal waveform testing laboratory.
- **Contact Us (`#/contact`)**: Direct store phone hotline (`+91 81307 33325`), email (`support@remoteelectronic.com`), Delhi retail location, and working contact form saving to LocalStorage.
- **FAQ & Remote Pairing (`#/faq`)**: Searchable accordion guides for remote compatibility, pairing voice remotes, dispatch times, and 7-day replacement.
- **Policies (`#/privacy`, `#/refund-policy`, `#/terms-of-service`, `#/shipping-policy`)**: Transparent customer policies.
- **404 Not Found (`*`)**: Friendly missing route handler.

### 2. Client-Side LocalStorage Persistence
Application state survives page reloads without requiring a backend database:
- `remote_electronic_cart_v1`: Items, quantities, and selected options.
- `remote_electronic_wishlist_v1`: Saved item IDs.
- `remote_electronic_compare_v1`: Compare list selection.
- `remote_electronic_orders_v1`: Order records generated during checkout with live tracking integration.
- `remote_electronic_reviews_v1`: User submitted customer reviews.
- `remote_electronic_inquiries`: Contact form submissions.
- `remote_electronic_promo_v1`: Applied coupon codes.

### 3. Special Specifications Fulfilled
- **Video Placeholder Space**: As specifically requested, video slots (pairing & testing guides) render a clean, minimalist blank square space.
- **Bottom Advertisement Section**: Every page includes a dedicated sponsored electronic advertisement banner above the footer.
- **Brand Identity**: Replaced original references with **RemoteElectronic**.

---

## 🚀 Local Development

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Aman22kr/remote-electronic.git
   cd remote-electronic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

4. Run code validation:
   ```bash
   npm run lint
   ```

---

## 📦 Building for Production

Compile the production-ready static assets to the `dist` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment via GitHub Actions

This repository is configured for automated static deployment to GitHub Pages via GitHub Actions.

### Deployment Setup:
1. Push your repository to GitHub under username `Aman22kr`:
   ```bash
   git remote add origin https://github.com/Aman22kr/remote-electronic.git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. On every push to `main`, `.github/workflows/deploy.yml` will automatically build the site and deploy the `dist/` folder to GitHub Pages at:
   ```
   https://aman22kr.github.io/remote-electronic/
   ```
4. Direct navigation and page refreshes work smoothly because the app uses **HashRouter** client-side routing.

---

## 📝 Demo & LocalStorage Notice
All checkout transactions, order IDs, and contact submissions in this demo application are simulated and persist solely within the user's local browser storage. No real payment or financial details are requested or transmitted.
