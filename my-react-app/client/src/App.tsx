import ProductSummary from './components/ProductDisplay/ProductSummary';
import Product from './components/ProductDisplay/Product';
import './App.css';
import { useCartContext } from './cartContext.tsx';
import { useProducts } from './hooks/useProduct.ts';
import Navbar from './NavBar.tsx';
import { useMemo, useState } from 'react';
import SkeletonCard from './skeleton.tsx';

export default function MyApp() {
  const { cart, totalItems, totalPrice, clearCart } = useCartContext();
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  if (loading) {
  return (
    <div className="page">
      <Navbar />
      <div className="productGrid">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="page">
      <Navbar />

      <h1 className="title">Explore Products</h1>
        {filteredProducts.length === 0 && <p>No Products Found</p>}
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchInput"
      />

      <div className="summaryBox">
        <ProductSummary
          totalItems={totalItems}
          totalPrice={totalPrice}
        />

        <div className="summaryActions">
          <button
            disabled={cart.length === 0}
            onClick={clearCart}
            className="clearBtn"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="productGrid">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <h2 className="title">Cart Items</h2>

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