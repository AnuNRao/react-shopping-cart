function ProductSummary({ totalItems, totalPrice } : {totalItems: number, totalPrice: number}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Total Items in Cart: {totalItems}</h2>
      <h2>Total Price: ${totalPrice}</h2>
    </div>
  );
}


export default ProductSummary;