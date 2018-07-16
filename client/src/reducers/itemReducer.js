import { GET_MEN_ITEMS, GET_WOMEN_ITEMS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MEN_ITEMS:
      return {
        ...state,
        menItems: action.payload
      };
    case GET_WOMEN_ITEMS:
      return {
        ...state,
        womenItems: action.payload
      };
    default:
      return state;
  }
}
