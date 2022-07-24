export const getFilteredProducts = (
  products,
  { showInventory, showFastDeliveryOnly }
) => {
  return products
    .filter(({ fastDelivery }) =>
      showFastDeliveryOnly ? fastDelivery : true
    )
    .filter(({ inStock }) => (showInventory ? true : inStock));
};