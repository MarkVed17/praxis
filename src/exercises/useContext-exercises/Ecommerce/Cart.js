import { useCart } from "./cart-context";

export function Cart() {
  const { cartItems } = useCart();

  return (
    <>
      <h1>eCommerce</h1>
      <h1> Items in cart ({cartItems})</h1>
    </>
  );
}
