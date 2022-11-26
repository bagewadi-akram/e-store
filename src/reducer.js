export const initialState = {
  basket: [],
  productopen: [],
  filter: [],
  user: [],
  api: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "PRODUCT_OPEN":
      return {
        ...state,
        productopen: [action.item],
      };
    case "ADD_FILTER":
     
        return { ...state, filter: [...action.filt] };
     

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "FILTER":
      // return {
      //   ...state,
      //   api: [...state.api, action.cate],
      // };
      return { ...state, api: [...action.cate] };

    case "FILTERNULL":
      return {
        ...state,
        api: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: [...state.user, action.detail],
      };
    case "EMPTY_USER":
      return {
        ...state,
        user: [],
      };

    default:
      return state;
  }
};

export default reducer;
