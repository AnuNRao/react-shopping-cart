import { useReducer, useEffect, useMemo } from "react";
import type { ApiProductResponse } from "../types";

type CartItem = ApiProductResponse & {
  quantity: number;
};

type Action =
  | { type: "ADD"; payload: ApiProductResponse }
  | { type: "REMOVE"; payload: ApiProductResponse }
  | { type: "CLEAR" };

function cartReducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "ADD": {
      const product = action.payload;
      const existing = state.find(i => i.id === product.id);

      if (existing) {
        return state.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }

    case "REMOVE": {
      const product = action.payload;
      const existing = state.find(i => i.id === product.id);

      if (!existing) return state;

      if (existing.quantity === 1) {
        return state.filter(i => i.id !== product.id);
      }

      return state.map(i =>
        i.id === product.id
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    }

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export function useCart() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    () => {
      const saved = localStorage.getItem("cart");
      return saved ? (JSON.parse(saved) as CartItem[]) : [];
    }
  );

  function addToCart(product: ApiProductResponse) {
    dispatch({ type: "ADD", payload: product });
  }

  function removeFromCart(product: ApiProductResponse) {
    dispatch({ type: "REMOVE", payload: product });
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice };
}