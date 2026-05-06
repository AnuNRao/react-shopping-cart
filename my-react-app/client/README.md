# 🛒 Modern Shopping Cart (Full-Stack Prep)

A robust e-commerce application built with the **MERN** stack (currently featuring a Node/Express logic layer). This project demonstrates a clean separation of concerns between a React frontend and a functional Node.js backend.

## 🚀 Key Updates & Features
* **Node.js & Express Backend:** Migrated frontend-only logic to a dedicated server. This handles product data processing and API requests via RESTful endpoints.
* **Real-time Search:** Integrated a dynamic search bar that allows users to filter the product catalog instantly as they type.
* **Toast Notifications:** Added non-blocking user feedback (using `react-hot-toast` or similar) to provide visual confirmation for actions like "Item Added to Cart."
* **API-Driven UI:** The frontend now fetches data from the backend, mimicking real-world production environments.

## 🛠️ Tech Stack
* **Frontend:** React 18, TypeScript, Vite
* **Backend:** Node.js, Express
* **State Management:** React Context API (for cart state)
* **Styling:** Modern CSS/Tailwind
* **Notifications:** React Hot Toast

## 📂 Project Structure
```text
├── client/          # React + Vite frontend
└── server/          # Node.js + Express backend
```

## 📦 Getting Started

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/AnuNRao/react-shopping-cart.git
    ```

2.  **Run the Server:**
    ```bash
    cd server
    npm install
    npm start (or node index.js)
    ```

3.  **Run the Frontend:**
    ```bash
    cd client
    npm install
    npm run dev
    ```

## 🛤️ Roadmap
* [ ] Integrate MongoDB/PostgreSQL for persistent data storage.
* [ ] Implement User Authentication (JWT).
* [ ] Add a checkout/payment gateway simulation.



Would you like me to help you draft the `fetch` or `axios` calls for the search feature to ensure the frontend and backend stay synced?
