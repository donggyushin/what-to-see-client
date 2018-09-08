//import
import axios from "axios";

//actions
const GET_REPLIES = "reply/GET_REPLIES";
const REMOVE_REPLIES = "reply/REMOVE_REPLIES";

//action creators

export const removeReplies = () => ({
  type: REMOVE_REPLIES
});

export const getReplies = replies => ({
  type: GET_REPLIES,
  replies
});

//api action creators
export const apiGetReplies = commentId => {
  return dispatch => {
    axios
      .get(`/api/comment/reply/${commentId}`)
      .then(response => response.data.replies)
      .then(replies => dispatch(getReplies(replies)))
      .catch(err => console.log(err));
  };
};

//initialState
const initialState = {
  replies: null
};
//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPLIES:
      return applyGetReplies(state, action);
    case REMOVE_REPLIES:
      return applyRemoveReplies(state, action);
    default:
      return state;
  }
}

//reducer actions
const applyRemoveReplies = (state, action) => {
  return {
    ...state,
    replies: null
  };
};

const applyGetReplies = (state, action) => {
  const { replies } = action;
  return {
    ...state,
    replies
  };
};
