import { useReducer } from "react";

const itemsInCart = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "jalebi",
    price: 50
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000
  }
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItemsCount: state.cartItemsCount + 1,
        totalPrice: state.totalPrice + action.payload
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItemsCount: state.cartItemsCount - 1,
        totalPrice: state.totalPrice - action.payload
      };

    default:
      return state;
  }
};

export const CartManagement = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItemsCount: 0,
    totalPrice: 0
  });
  const { cartItemsCount, totalPrice } = state;

  return (
    <>
      <h1>Items in Cart ({cartItemsCount})</h1>
      <h2>Cart Total - Rs. {totalPrice}</h2>
      <hr />
      {itemsInCart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: item.price })
            }
          >
            Add to Cart
          </button>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item.price })
            }
          >
            Remove from Cart
          </button>
        </div>
      ))}
    </>
  );
};
