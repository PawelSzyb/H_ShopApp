import axios from "axios";
import { GET_MEN_ITEMS, GET_WOMEN_ITEMS } from "./types";

export const getMenItems = () => dispatch => {
  axios
    .get("/api/items/menitems")
    .then(res =>
      dispatch({
        type: GET_MEN_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MEN_ITEMS,
        payload: null
      })
    );
};

export const toggleMenLike = id => dispatch => {
  axios
    .post(`/api/items/menitems/like/${id}`)
    .then(res => dispatch(getMenItems()))
    .catch(err =>
      dispatch({
        type: GET_MEN_ITEMS,
        payload: null
      })
    );
};

export const getWomenItems = () => dispatch => {
  axios
    .get("/api/items/womenitems")
    .then(res =>
      dispatch({
        type: GET_WOMEN_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_WOMEN_ITEMS,
        payload: null
      })
    );
};

export const toggleWomenLike = id => dispatch => {
  axios
    .post(`/api/items/womenitems/like/${id}`)
    .then(res => dispatch(getWomenItems()))
    .catch(err =>
      dispatch({
        type: GET_WOMEN_ITEMS,
        payload: null
      })
    );
};
