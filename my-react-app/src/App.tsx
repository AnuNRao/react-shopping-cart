import ProductSummary from './components/ProductDisplay/ProductSummary';
import Product from './components/ProductDisplay/Product';
import './App.css';
import { useCart } from './hooks/useCart.ts';
import { useProducts } from './hooks/useProduct.ts';
import { useMemo, useCallback } from 'react';
export default function MyApp() {
  const { cart, addToCart, removeFromCart, totalItems, totalPrice } = useCart();
  const { products, loading, error } = useProducts();

  const cartMap = useMemo(() => {
    return new Map(cart.map(item => [item.id, item.quantity]));
  }, [cart]);

  // const cartMap = new Map(cart.map(item => [item.id, item.quantity]));

  const getQuantity = useCallback((productId: number)=>{
    return cartMap.get(productId) || 0;
  }, [cartMap])

  // function getQuantity(productId: number) {
  //   return cartMap.get(productId) || 0;
  // }

  if (loading) {
  return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
}

  if (error) {
    return <p>{error}</p>;
  }

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
              quantity={getQuantity(product.id)}
              onAdd={addToCart}
              onRemove={removeFromCart}
            />
          </div>
        ))}
      </div>

      <h2>Cart Items</h2>

      <div className="cartBox">
        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map(item => (
          <div className="cartItem" key={item.id}>
            {item.title} - Qty: {item.quantity} - ${item.price.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}