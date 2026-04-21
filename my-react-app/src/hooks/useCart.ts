import { useState, useEffect } from "react";
import type { ApiProductResponse } from '../types';


type CartItem = ApiProductResponse & {
  quantity: number;
};
export function useCart() {
  // your logic here
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) as CartItem[] : [];
  });


  function addToCart(product: ApiProductResponse) {
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


  function removeFromCart(product: ApiProductResponse) {
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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])
  return { cart, setCart, addToCart, removeFromCart, totalItems, totalPrice };
}
