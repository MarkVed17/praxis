import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Eloquent JS",
    price: 1999
  },
  {
    id: 2,
    name: "You Don't Know JS!",
    price: 999
  },
  {
    id: 3,
    name: "The Pragmatic Programmer",
    price: 2999
  }
];

export const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const { name, price } = product;

    const isInCart = cartItems.find((cartItem) => cartItem.id === product.id);

    if (isInCart) {
      setCartItems((cartItems) =>
        cartItems.map((cartItem) =>
          cartItem.id === isInCart.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, name: name, price: price, quantity: 1 }
      ]);
    }
  };

  return (
    <>
      <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>
            <p>
              {product.name} - Rs. {product.price}
            </p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <h1>Cart</h1>
        {cartItems &&
          cartItems.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
      </div>
    </>
  );
};
