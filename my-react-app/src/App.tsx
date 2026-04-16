import { useState, useEffect } from 'react';
import ProductSummary from './components/ProductDisplay/ProductSummary';
import Product from './components/ProductDisplay/Product';
import './App.css';
import { fetchProducts } from './components/ProductDisplay/ProductService';
import type { ApiProductResponse } from './types.';


type CartItem = ApiProductResponse & {
  quantity: number;
};

export default function MyApp() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProductsData] = useState<ApiProductResponse[]>([]);
  useEffect(()=>{
    async function loadProducts(){
      try{
        const data = await fetchProducts();
        setProductsData(data);
      }
      catch(error){
        console.log(error);
      }
    }
    loadProducts();
  }, [])
  
  
  function handleAddClick(product: ApiProductResponse) {
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

  function handleRemoveClick(product: ApiProductResponse) {
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
              quantity={cart.find(i => i.id === product.id)?.quantity || 0}
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
            {item.title} - Qty: {item.quantity} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
}