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

export function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <h1>eCommerce</h1>
      <h1> Items in cart ({cartItems})</h1>
    </>
  );
}

// add useState for the item#
// Right now we are passing item value directly as 4.
// Let's change that value from a direct value to be something coming from state.

// Now, instead of logger, you can pass setItem.
// You are basically passing { item, setItem } pair.
