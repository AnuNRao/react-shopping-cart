import { useCartContext } from "../../cartContext";
import type { ApiProductResponse } from "../../types";

type Props = {
  product: ApiProductResponse;
};

export default function Product({ product }: Props) {
  const { addToCart, removeFromCart, cart } = useCartContext();

  const quantity =
    cart.find(i => i.id === product.id)?.quantity ?? 0;

  return (
    <div className="productCard">
      <img src={product.image} alt={product.title} />

      <h3 className="productTitle">{product.title}</h3>

      <div className="qtyControls">
        <button
          onClick={() => removeFromCart(product)}
          disabled={quantity === 0}
        >
          -
        </button>

        <span className="qty">{quantity}</span>

        <button onClick={() => addToCart(product)}>+</button>
      </div>
    </div>
  );
}