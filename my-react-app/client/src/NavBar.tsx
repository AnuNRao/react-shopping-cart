import { useCartContext } from './cartContext.tsx';

export default function Navbar() {
  const { totalItems } = useCartContext();

  return (
    <div style={styles.nav}>
      <h2>Cartify</h2>

      <div style={styles.cart}>
        🛒 Cart ({totalItems})
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    background: "#111",
    color: "#fff",
    marginBottom: "20px"
  },
  cart: {
    background: "#ef4444",
    padding: "6px 12px",
    borderRadius: "20px"
  }
};