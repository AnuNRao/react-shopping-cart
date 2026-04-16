type ProductType = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  product: ProductType;
  onAdd: (product: ProductType) => void;
  onRemove: (product: ProductType) => void;
};

export default function Product({ product, onAdd, onRemove }: Props) {
  return (
    <div>
      <div className="productName">
        {product.name} - ${product.price}
      </div>

      <div className="qty">Quantity: 0</div>

      <div className="buttonRow">
        <button className="addBtn" onClick={() => onAdd(product)}>
          Add
        </button>
        <button className="removeBtn" onClick={() => onRemove(product)}>
          Remove
        </button>
      </div>
    </div>
  );
}