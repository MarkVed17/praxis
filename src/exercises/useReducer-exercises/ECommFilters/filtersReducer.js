export const filtersReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "TOGGLE_INVENTORY":
      return { ...state, showInventory: !state.showInventory };

    case "TOGGLE_DELIVERY":
      return { ...state, showFastDeliveryOnly: !state.showFastDeliveryOnly };

    case "RESET":
      return {
        ...state,
        sortBy: null,
        showInventory: true,
        showFastDeliveryOnly: false
      };

    default:
      return state;
  }
};