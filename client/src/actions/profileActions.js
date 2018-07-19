import axios from "axios";
import { SET_CURRENT_USER, GET_ERRORS, CLEAR_CURRENT_PROFILE } from "./types";
import { logoutUser } from "./authActions";

// Clear current profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure about that?")) {
    axios
      .delete("/api/users")
      .then(res => dispatch(logoutUser()))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
