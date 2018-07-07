import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login User - get token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwToken", token);
      //Set authheader
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  // Delete token from local storage
  localStorage.removeItem("jwToken");
  // Remove auth header for requests
  setAuthToken(false);
  // Set isAuthenticated to false
  dispatch(setCurrentUser({}));
};