# 🌞 SunCart – Summer Essentials Store

## 🔗 Live Website

👉 https://sun-cart-iota.vercel.app/

## 📌 Project Purpose

SunCart is a modern summer-themed eCommerce web application where users can explore and purchase seasonal products like sunglasses, outfits, skincare, and beach accessories. The platform focuses on providing a smooth user experience with authentication, product browsing, and responsive design.

---

## 🚀 Key Features

* 🏠 **Home Page**

  * Hero Banner with summer offers
  * Popular Products section
  * Summer Care Tips
  * Top Brands showcase

* 🛍️ **Product System**

  * Dynamic product listing from JSON data
  * Product Details page (Protected Route)
  * View detailed product information

* 🔐 **Authentication**

  * Email & Password Login/Register
  * Google Social Login
  * Secure user session using BetterAuth

* 👤 **User Profile**

  * View user info (name, email, photo)
  * Update profile information

* 📱 **Responsive Design**

  * Fully responsive for mobile, tablet, and desktop

* ⚡ **Performance**

  * Optimized images
  * Fast loading UI

---

## 🧩 Technologies Used

* ⚛️ Next.js (App Router)
* 🎨 Tailwind CSS
* 💎 HeroUI
* 🔐 BetterAuth
* 📦 React Hook Form
* 🎞️ Animate.css
* ⭐ React Icons

---

## 📁 Project Structure (Basic)

```
/app
  /products
    /[id]
  /login
  /register
  /my-profile
/components
/public
```

---

## 🔒 Environment Variables

Create a `.env.local` file and add your secret keys:

```
NEXT_PUBLIC_AUTH_URL=your_auth_url
AUTH_SECRET=your_secret_key
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/Abdur-Rahim-web/Sun-Cart
cd Sun-Cart
npm install
npm run dev
```

---

## 🌟 Future Improvements

* Add cart & checkout system
* Add product filtering & search
* Add order history
* Add dark mode

---

## 🙌 Author

Developed by Abdur Rahim
