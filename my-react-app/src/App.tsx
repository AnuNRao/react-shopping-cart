import { useState } from 'react';
import ProductSummary from './ProductSummary';
import Product from './Product';
import './App.css';

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type CartItem = ProductType & {
  quantity: number;
};

export default function MyApp() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const products: ProductType[] = [
    { name: "Laptop", id: 1, price: 1000 },
    { name: "Phone", id: 2, price: 500 },
    { name: "Ipad", id: 3, price: 700 },
    { name: "Airpods", id: 4, price: 200 },

  ];

  function handleAddClick(product: ProductType) {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveClick(product: ProductType) {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);

      if (!existing) return prevCart;

      if (existing.quantity === 1) {
        return prevCart.filter(item => item.id !== product.id);
      }

      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="page">
      <h1 className="title">🛒 Shopping Cart</h1>

      <div className="summaryBox">
        <ProductSummary
          totalItems={totalItems}
          totalPrice={totalPrice}
        />
      </div>

      <div className="productGrid">
        {products.map(product => (
          <div className="card" key={product.id}>
            <Product
              product={product}
              onAdd={handleAddClick}
              onRemove={handleRemoveClick}
            />
          </div>
        ))}
      </div>

      <h2>Cart Items</h2>

      <div className="cartBox">
        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
          <div className="cartItem" key={item.id}>
            {item.name} - Qty: {item.quantity} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
}