import { useCartContext } from "../../cartContext";
import type { ApiProductResponse } from "../../types";
import { useToast } from "../../ToastContext";

type Props = {
  product: ApiProductResponse;
};

export default function Product({ product }: Props) {
  const { addToCart, removeFromCart, cart } = useCartContext();
  const { showToast } = useToast();
  const quantity =
    cart.find(i => i.id === product.id)?.quantity ?? 0;

  return (
    <div className="productCard">
      <img src={product.image} alt={product.title} />

      <h3 className="productTitle">{product.title}</h3>

      <div className="qtyControls">
        <button className="reduceQty"
          onClick={() => {
            removeFromCart(product);
            showToast("Removed from cart", "error");
          }}
          disabled={quantity === 0}
        >
          -
        </button>

        <span className="qty">{quantity}</span>

        <button
          onClick={() => {
            addToCart(product);
            showToast("Added to cart", "success");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}