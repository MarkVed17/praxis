import { useCart } from "./cart-context";

export function ProductListing() {
  const { setCartItems } = useCart();

  const handleAddToCart = () => setCartItems((c) => c + 1);

  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2>Product {item}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  ));
}
