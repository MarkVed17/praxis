export const getSortedProducts = (products, sortBy) => {
  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return products.sort((a, b) => a["price"] - b["price"]);
  } else if (sortBy === "PRICE_HIGH_TO_LOW") {
    return products.sort((a, b) => b["price"] - a["price"]);
  } else return products;
};