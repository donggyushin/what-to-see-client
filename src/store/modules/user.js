//imports
import axios from "axios";

//actions
const CHECK_LOGIN = "user/CHECK_LOGIN";
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const CLOSEMODAL = "user/CLOSEMODAL";
const OPENMODAL = "user/OPENMODAL";

//action creators

export const openModal = message => ({
  type: OPENMODAL,
  message
});

export const closeModal = () => ({
  type: CLOSEMODAL
});

export const logout = () => ({
  type: LOGOUT
});

export const login = () => ({
  type: LOGIN
});

export const checkLogin = isLoggedIn => ({
  type: CHECK_LOGIN,
  isLoggedIn
});

//api action creators

export const apiLogout = () => {
  return dispatch => {
    axios
      .get("/api/auth/logout")
      .then(response => response.data)
      .then(data => {
        if (data.ok) {
          dispatch(logout());
        }
      })
      .catch(err => console.log(err));
  };
};

export const apiLogin = (username, password) => {
  return dispatch => {
    axios
      .post("/api/auth/login", {
        username,
        password
      })
      .then(response => {
        console.log(response);
        if (response.data.status === 404) {
          dispatch(openModal(response.data.error));
        } else {
          dispatch(login());
        }
      })
      .catch(err => console.log(err));
  };
};

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
  isLoggedIn: false,
  errorModalVisiable: false,
  errorMessage: ""
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_LOGIN:
      return applyCheckLogin(state, action);
    case LOGIN:
      return applyLogin(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    case CLOSEMODAL:
      return applyCloseModal(state, action);
    case OPENMODAL:
      return applyOpenModal(state, action);
    default:
      return state;
  }
}

//reducer actions

const applyOpenModal = (state, action) => {
  const { message } = action;
  return {
    ...state,
    errorModalVisiable: true,
    errorMessage: message
  };
};

const applyCloseModal = (state, action) => {
  return {
    ...state,
    errorModalVisiable: false
  };
};

const applyLogout = (state, action) => {
  return {
    ...state,
    isLoggedIn: false
  };
};

const applyLogin = (state, action) => {
  return {
    ...state,
    isLoggedIn: true
  };
};

const applyCheckLogin = (state, action) => {
  const { isLoggedIn } = action;
  return {
    ...state,
    isLoggedIn: isLoggedIn
  };
};
