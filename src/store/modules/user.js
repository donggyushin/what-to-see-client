//imports
import axios from "axios";

//actions
const CHECK_LOGIN = "user/CHECK_LOGIN";

//action creators
export const checkLogin = isLoggedIn => ({
  type: CHECK_LOGIN,
  isLoggedIn
});

//api action creators

export const apiCheckLogin = () => {
  return dispatch => {
    axios
      .get("/api/auth/check")
      .then(response => response.data)
      .then(data => {
        dispatch(checkLogin(data.ok));
      })
      .catch(err => console.log(err));
  };
};

//initialState

const initialState = {
  isLoggedIn: false
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_LOGIN:
      return applyCheckLogin(state, action);
    default:
      return state;
  }
}

//reducer actions
const applyCheckLogin = (state, action) => {
  const { isLoggedIn } = action;
  return {
    ...state,
    isLoggedIn: isLoggedIn
  };
};
