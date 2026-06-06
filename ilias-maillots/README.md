# ⚽ ILIAS & LAHCEN — Maillots Premium

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![LocalStorage](https://img.shields.io/badge/LocalStorage-4A90D9?style=for-the-badge&logo=databricks&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-green?style=for-the-badge)

**A premium, fully responsive football jersey e-commerce web application built with vanilla HTML, CSS & JavaScript.**

[🛍️ Live Demo](#) · [🐛 Report Bug](#) · [✨ Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Pages & Functionality](#-pages--functionality)
- [Screenshots](#-screenshots)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Authors](#-authors)

---

## 🌟 Overview

**ILIAS & LAHCEN** is a fully client-side football jersey e-commerce platform targeting the Moroccan market. It features a curated catalogue of 30+ authentic jerseys from top European clubs and national teams, a complete shopping cart with checkout flow, an admin dashboard for product management, and a polished UI built without any framework or external dependencies.

The entire data layer runs on `localStorage`, making the app fully portable — no server or database required.

---

## ✨ Features

### 🛒 Shop & Cart
- Browse **30+ premium football jerseys** across clubs and national teams
- **Filter tabs** — All / Clubs / National Teams / Morocco 🇲🇦 / Promotions 🔥
- **Live search** — real-time filtering by name and description
- **Wishlist** — heart-toggle on any product card
- **Shopping cart panel** — slide-in sidebar with quantity controls
- **Discount badges** and calculated savings displayed per product
- **Cart badge** with animated counter on the nav button

### 🧾 Checkout Flow
- Multi-step checkout with personal information form
- **Delivery options** — Standard (30 Dhs), Express (60 Dhs), or Free In-Store Pickup
- Order summary with itemised breakdown (subtotal, savings, delivery, total)
- Form validation before order confirmation
- **Order confirmation page** with a randomly generated order number and next-step guide

### 🔧 Admin Dashboard
- **Password-protected login** (admin/admin123 · client/client123)
- **Add** new products with name, description, image URL, price, and discount
- **Edit** existing products via a modal dialog
- **Delete** products with confirmation prompt
- **Live search** across the admin product list
- **Stats bar** — total products, average price, maximum discount
- Toast notifications for all CRUD operations

### 🎨 UI & UX
- Consistent **warm editorial design system** (cream, ink, rust palette + Playfair Display / Manrope typography)
- Fully **responsive** — mobile hamburger menu, adaptive grid, touch-friendly controls
- Hero **image slider** with auto-play, arrow navigation, dot indicators, and swipe support
- **Scroll-reveal animations** on the About page
- Sticky navigation with blur/backdrop-filter
- **Dark footer** with social links (WhatsApp, Instagram, Facebook)

### 👤 User Accounts
- **Login page** routing to admin or client views based on credentials
- **Registration form** with password strength meter, confirmation match, and terms acceptance
- User info saved to `localStorage` on signup

### 📬 Contact Form
- Full contact form with field validation
- Success state shown inline after submission (no page reload)
- Social channel links (WhatsApp, Instagram, Facebook)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, animations, responsive layout (CSS Grid & Flexbox) |
| **Vanilla JavaScript (ES6+)** | Interactivity, DOM manipulation, event handling |
| **localStorage API** | Persistent product catalogue and cart data |
| **Google Fonts** | Playfair Display (headings) + Manrope (body) |
| **SVG Icons** | Inline hand-crafted SVGs — zero icon library dependency |

> **No frameworks. No bundlers. No dependencies.** The entire project runs by opening `Accueil.html` in a browser.

---

## 📁 Project Structure

```
ILIAS-LAHCEN/
│
├── HTML Pages
│   ├── Accueil.html        # Landing page with hero slider & popular products
│   ├── client.html         # Shop — product grid, cart panel & full checkout
│   ├── admin.html          # Admin dashboard — CRUD for products
│   ├── login.html          # Login page (admin / client routing)
│   ├── inscription.html    # User registration with password strength meter
│   ├── a-propos.html       # About page — story, values, team profiles
│   ├── contact.html        # Contact form + social links
│   └── checkout.html       # Standalone alternative checkout page
│
├── CSS Stylesheets
│   ├── Accueil.css         # Landing page styles
│   ├── client.css          # Shop, cart panel & checkout styles
│   ├── admin.css           # Admin dashboard styles
│   ├── login.css           # Login page styles
│   ├── inscription.css     # Registration page styles
│   ├── a-propos.css        # About page styles (with scroll-reveal)
│   ├── contact.css         # Contact page styles
│   └── checkout.css        # Standalone checkout styles
│
├── JavaScript
│   └── index.js            # Shared data layer (CRUD via localStorage)
│                           # + admin page controller (IIFE)
│
└── images/                 # Local assets (favicons, team photos)
```

### Data Architecture

`index.js` is the single source of truth for all product data:

```
localStorage["boutique_produits"]
    → db_charger()   — READ   (seeds defaults on first visit)
    → db_ajouter()   — CREATE (auto-increments ID)
    → db_modifier()  — UPDATE (field-level patch)
    → db_supprimer() — DELETE (filter by ID)
```

Both `admin.html` and `client.html` use the same `LS_KEY`, so changes made in the admin panel are reflected in the shop instantly (or on the next tab refresh via the `storage` event listener).

---

## ⚙️ Installation

No build step is required. This is a pure static site.

### Option 1 — Open directly in your browser

```bash
git clone https://github.com/your-username/ilias-lahcen-maillots.git
cd ilias-lahcen-maillots
# Open Accueil.html in your browser
```

### Option 2 — Use a local dev server (recommended to avoid CORS issues with local images)

```bash
# With VS Code Live Server extension — right-click Accueil.html → Open with Live Server

# Or with Python
python -m http.server 8000
# Then visit http://localhost:8000/Accueil.html

# Or with Node.js (npx)
npx serve .
```

---

## 🚀 Usage

### Customer Flow

1. Open `Accueil.html` — browse the landing page and featured jerseys.
2. Click **"Découvrir la Boutique"** or navigate to `client.html`.
3. Use the **search bar** or **filter tabs** to find jerseys.
4. Click **"Acheter"** to add items to the cart; the cart badge updates instantly.
5. Open the **cart panel** (top-right button) and adjust quantities.
6. Click **"Passer la commande"** to enter the checkout flow.
7. Fill in personal details, choose a delivery method, and confirm your order.

### Admin Flow

1. Navigate to `login.html`.
2. Log in with credentials: **admin** / **admin123**.
3. Use the **Add Product** form to create new jerseys.
4. Click **Modifier** on any card to edit it via the modal.
5. Click **Supprimer** to delete a product (with confirmation).
6. Use the **search box** to filter the product list.

### Default Credentials

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `admin123` |
| Client | `client` | `client123` |

> ⚠️ These are hardcoded for demo purposes. Replace with a proper auth system before production use.

---

## 📄 Pages & Functionality

| Page | File | Description |
|---|---|---|
| 🏠 Landing | `Accueil.html` | Hero slider, popular products, stats, footer |
| 🛍️ Shop | `client.html` | Full catalogue, search, filters, cart, checkout, order success |
| 🔧 Admin | `admin.html` | Product CRUD, stats dashboard, modal editor |
| 🔐 Login | `login.html` | Credential-based routing to admin or shop |
| 📝 Register | `inscription.html` | Account creation with password strength validation |
| ℹ️ About | `a-propos.html` | Brand story, team cards, scroll-reveal animations |
| 📬 Contact | `contact.html` | Contact form, info cards, social links |
| 🧾 Checkout (alt) | `checkout.html` | Standalone checkout (legacy/alternative flow) |

---

## 📸 Screenshots

> _Add screenshots of your pages here by replacing the placeholder paths below._

| Landing Page | Shop |
|---|---|
| ![Landing](./screenshots/accueil.png) | ![Shop](./screenshots/shop.png) |

| Admin Dashboard | Checkout |
|---|---|
| ![Admin](./screenshots/admin.png) | ![Checkout](./screenshots/checkout.png) |

| Login | About |
|---|---|
| ![Login](./screenshots/login.png) | ![About](./screenshots/about.png) |

---

## 🔮 Future Improvements

### Authentication & Security
- [ ] Replace hardcoded credentials with a real backend auth system (JWT / sessions)
- [ ] Hash passwords — never store plaintext credentials
- [ ] Role-based access control (RBAC) for the admin panel

### Backend & Persistence
- [ ] Migrate from `localStorage` to a real database (e.g. MongoDB, PostgreSQL)
- [ ] RESTful or GraphQL API (Node.js / Express or Django)
- [ ] Order history stored per user with status tracking

### E-commerce Features
- [ ] Product detail page with size selector (S / M / L / XL / XXL)
- [ ] Real payment gateway integration (e.g. CMI, PayZone for Morocco)
- [ ] Coupon / promo code system
- [ ] Product reviews and star ratings
- [ ] Stock quantity management in the admin panel

### UX & Performance
- [ ] Image optimisation and lazy loading with `IntersectionObserver`
- [ ] Dark mode toggle
- [ ] Skeleton loading states while products render
- [ ] PWA support (Service Worker + Web App Manifest) for offline browsing

### Developer Experience
- [ ] Migrate to a component-based framework (React / Vue)
- [ ] Add a bundler (Vite) for code splitting and hot-reload
- [ ] Unit tests for the data layer (`index.js`)
- [ ] CI/CD pipeline for automatic deployment (GitHub Actions + Vercel/Netlify)

---

## 📜 License

This project is released under the **MIT License**.  
See the [LICENSE](./LICENSE) file for full details.

---

## 👨‍💻 Authors

<table>
  <tr>
    <td align="center">
      <b>Ilias Benazzouza</b><br/>
      First-year Digital Development student<br/>
      Fan of Raja Club Athletic 💚<br/>
      <a href="https://www.instagram.com/iliass____ben">Instagram</a> ·
      <a href="https://wa.me/212769908707">WhatsApp</a> ·
      <a href="https://github.com/iliassben809">GitHub</a> ·
      <a href="https://www.linkedin.com/in/ilias-benazzouza-b47461402/">LinkedIn</a>
    </td>
    <td align="center">
      <b>Lahcen Sahraoui</b><br/>
      First-year Digital Development student<br/>
      Fan of AS FAR Rabat 🖤<br/>
      <a href="https://www.instagram.com/s_lahcen_06/">Instagram</a> ·
      <a href="https://wa.me/212775358233">WhatsApp</a>
    </td>
  </tr>
</table>

---

<div align="center">

Made with ❤️ in **Morocco 🇲🇦**

© 2025 ILIAS & LAHCEN — Maillots Premium Authentiques

</div>
