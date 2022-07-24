import React, { useReducer } from "react";

import faker from "faker";
import { filtersReducer } from "./filtersReducer";
import { getSortedProducts } from "./getSortedProducts";
import { getFilteredProducts } from "./getFilteredProducts";

faker.seed(123);

const products = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  level: faker.random.arrayElement([
    "beginner",
    "amateur",
    "intermediate",
    "advanced",
    "professional"
  ]),
  color: faker.commerce.color()
}));

export const ECommFilters = () => {
  const [state, dispatch] = useReducer(filtersReducer, {
    sortBy: null,
    showInventory: true,
    showFastDeliveryOnly: false
  });

  const { sortBy, showInventory, showFastDeliveryOnly } = state;

  const sortedData = getSortedProducts(products, sortBy);
  const filteredData = getFilteredProducts(sortedData, {
    showInventory,
    showFastDeliveryOnly
  });

  return (
    <>
      <div className="App">
        <fieldset>
          <legend>Sort by Price</legend>
          <label>
            <input
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "PRICE_LOW_TO_HIGH" })
              }
              checked={sortBy === "PRICE_LOW_TO_HIGH"}
            />
            Low to High
          </label>
          <label>
            <input
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "PRICE_HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            />
            High to Low
          </label>
        </fieldset>
        <hr />
        <fieldset>
          <legend>Filter by</legend>
          <label>
            <input
              type="checkbox"
              onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
              checked={showInventory}
            />
            Include Out of Stock
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
              checked={showFastDeliveryOnly}
            />
            Fast Delivery only
          </label>
        </fieldset>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {filteredData.map(
            ({
              id,
              name,
              image,
              price,
              productName,
              inStock,
              level,
              fastDelivery
            }) => (
              <div
                key={id}
                style={{
                  border: "1px solid #4B5563",
                  borderRadius: "0 0 0.5rem 0.5rem",
                  margin: "1rem",
                  maxWidth: "15%",
                  padding: "0 0 1rem"
                }}
              >
                <img src={image} width="100%" height="auto" alt={productName} />
                <h3> {name} </h3>
                <div>Rs. {price}</div>
                {inStock && <div> In Stock </div>}
                {!inStock && <div> Out of Stock </div>}
                <div>{level}</div>
                {fastDelivery ? (
                  <div> Fast Delivery </div>
                ) : (
                  <div> 3 days minimum </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
