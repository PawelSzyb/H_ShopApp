import axios from "axios";
import { GET_ITEMS } from "./types";

export const getItems = () => dispatch => {
  axios
    .get("/api/items/menItems")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEMS,
        payload: null
      })
    );
};

export const toggleLike = id => dispatch => {
  axios
    .post(`/api/items/menitems/like/${id}`)
    .then(res => dispatch(getItems()))
    .catch(err =>
      dispatch({
        type: GET_ITEMS,
        payload: null
      })
    );
};
