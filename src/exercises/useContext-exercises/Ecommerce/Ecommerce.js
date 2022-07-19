export function ProductListing() {
  return ["1", "2", "3", "4"].map((item) => <h2 key={item}>Product {item}</h2>);
}

export function Cart() {
  return (
    <>
      <h1>eCommerce</h1>
      <h1> Items in cart </h1>
    </>
  );
}
