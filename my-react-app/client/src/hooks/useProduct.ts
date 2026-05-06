import { useState, useEffect } from "react";
import type { ApiProductResponse } from '../types';
import { fetchProducts } from "../components/ProductDisplay/ProductService";

export function useProducts() {
  const [products, setProductsData] = useState<ApiProductResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  async function loadProducts() {
    try {
      await new Promise(res => setTimeout(res, 2000));
      const data = await fetchProducts();
      setProductsData(data);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  }

  loadProducts();
}, []);

  return { products, loading, error };
}