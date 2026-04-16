# 🛒 Shopping Cart App (React + TypeScript)

A simple and modern Shopping Cart application built using **React**, **TypeScript**, and **CSS**. This project demonstrates state management, component structure, and clean UI design.

---

## Features

* Add and remove products from cart
* Dynamic cart updates (quantity & total)
* Responsive product grid layout
* Clean and modern UI (light theme)
* Reusable components
* Type-safe code with TypeScript

---

## Concepts Covered

* React Hooks (`useState`)
* Component-based architecture
* Props & TypeScript typing
* Derived state (total items & price)
* Conditional rendering
* CSS styling & layout

---

## 📂 Project Structure

```
src/
│── App.tsx
│── App.css
│── Product.tsx
│── ProductSummary.tsx
│── main.tsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

---

## How It Works

* Products are displayed in a grid
* Clicking **Add**:

  * Adds item to cart
  * Increases quantity if already exists
* Clicking **Remove**:

  * Decreases quantity
  * Removes item if quantity reaches 0
* Cart summary updates automatically

---

## UI Highlights

* Light theme for better readability
* Card-based layout with shadows
* Hover effects for better UX
* Clear primary and secondary actions

---

## Future Improvements

* Show live quantity inside product cards
* Add product images
* Add checkout flow
* Persist cart using localStorage
* Add animations (optional)

---

## Tech Stack

* React
* TypeScript
* Vite
* CSS

---

## Preview

> Simple and clean shopping cart UI with product cards and cart summary.

---

## Contributing

Feel free to fork this repo and improve it. Suggestions and pull requests are welcome!

---
