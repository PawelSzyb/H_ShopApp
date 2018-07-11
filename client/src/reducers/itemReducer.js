import { GET_ITEMS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        menItems: action.payload
      };
    default:
      return state;
  }
}
