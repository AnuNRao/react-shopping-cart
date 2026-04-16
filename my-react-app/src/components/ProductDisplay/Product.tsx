import type { ApiProductResponse } from "../../types.";


type Props = {
  product: ApiProductResponse;
  onAdd: (product: ApiProductResponse) => void;
  onRemove: (product: ApiProductResponse) => void;
};

export default function Product({ product, onAdd, onRemove }: Props) {
  return (
    <div className="productCard">
      <img
        src={product.image}
        alt={product.title}
        className="productImage"
      />

      <h3 className="productTitle">{product.title}</h3>

      <p className="productPrice">${product.price.toFixed(2)}</p>

      <p className="qty">Quantity: 0</p>

      <div className="buttonRow">
        <button className="addBtn" onClick={() => onAdd(product)}>
          Add to Cart
        </button>
        <button className="removeBtn" onClick={() => onRemove(product)}>
          Remove
        </button>
      </div>
    </div>
  );
}