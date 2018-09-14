//imports
import axios from "axios";
import * as userActions from "./user";
//actions
const GET_STAR = "star/GET_STAR";
const REMOVE_STAR = "star/REMOVE_STAR";

//action creators

export const removeStar = () => ({
  type: REMOVE_STAR
});

export const getStar = star => ({
  type: GET_STAR,
  star
});

//api actions
export const apiGetStar = movieId => {
  return dispatch => {
    axios
      .get(`api/star/${movieId}`)
      .then(response => response.data)
      .then(data => {
        if (!data.ok) {
          dispatch(userActions.openModal(data.error));
        } else {
          dispatch(getStar(data.beautyAvg));
        }
      })
      .catch(err => console.log(err));
  };
};

export const apiSendStar = (movieId, score) => {
  return dispatch => {
    axios
      .post(`/api/star/${movieId}`, {
        score
      })
      .then(response => {
        return response.data;
      })
      .then(data => {
        console.log(data);
        if (!data.ok) {
          dispatch(userActions.openModal(data.error));
        } else {
          dispatch(apiGetStar(movieId));
        }
      })
      .catch(err => console.log(err));
  };
};

//initialStates
const initialStates = {
  star: null
};
//reducer
export default function reducer(state = initialStates, action) {
  switch (action.type) {
    case GET_STAR:
      return applyGetStar(state, action);

    case REMOVE_STAR:
      return applyRemoveStar(state, action);

    default:
      return state;
  }
}

//reducer actions

const applyRemoveStar = (state, action) => {
  return {
    ...state,
    star: null
  };
};

const applyGetStar = (state, action) => {
  const { star } = action;
  return {
    ...state,
    star
  };
};
