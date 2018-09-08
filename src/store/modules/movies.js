//import
import axios from "axios";
import * as userActions from "./user";

const movie_api_url =
  "https://yts.am/api/v2/list_movies.json?sort_by=download_count&limit=50";

const movie_detail_api_url =
  "https://yts.am/api/v2/movie_details.json?movie_id=";

const movie_suggestions_api_url =
  "https://yts.am/api/v2/movie_suggestions.json?movie_id=";

//actions
const SET_MOVIES = "movies/SET_MOVIES";
const SET_MOVIE = "movies/SET_MOVIE";
const TURN_ON_DETAIL_VIEW = "movies/TURN_ON_DETAIL_VIEW";
const TURN_OFF_DETAIL_VIEW = "movies/TURN_OFF_DETAIL_VIEW";
const REMOVE_MOVIE_DETAIL = "movies/REMOVE_MOVIE_DETAIL";
const REMOVE_MOVIE_LIST = "movies/REMOVE_MOVIE_LIST";
const SET_MOVIE_SUGGESTIONS = "movies/SET_MOVIE_SUGGESTIONS";
const REMOVE_MOVIE_SUGGESTIONS = "movies/REMOVE_MOVIE_SUGGESTIONS";
const SET_COMMENTS = "movies/SET_COMMENTS";
const REMOVE_COMMENTS = "movies/REMOVE_COMMENTS";
const DELETE_COMMENT = "movies/DELETE_COMMENT";

//action creators

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const removeComment = () => ({
  type: REMOVE_COMMENTS
});

export const setComments = comments => ({
  type: SET_COMMENTS,
  comments
});

export const removeMovieSuggestions = () => ({
  type: REMOVE_MOVIE_SUGGESTIONS
});

export const setMovieSuggestions = suggestions => ({
  type: SET_MOVIE_SUGGESTIONS,
  suggestions
});

export const removeMovieList = () => ({
  type: REMOVE_MOVIE_LIST
});

export const removeMovieDetail = () => ({
  type: REMOVE_MOVIE_DETAIL
});

export const turnOffDetailView = () => ({
  type: TURN_OFF_DETAIL_VIEW
});

export const turnOnDetailView = () => ({
  type: TURN_ON_DETAIL_VIEW
});

export const setMovie = movie => ({
  type: SET_MOVIE,
  movie
});

export const setMovies = movies => ({
  type: SET_MOVIES,
  movies
});

//api action creators

export const apiDeleteComment = commentId => {
  return dispatch => {
    axios
      .delete(`/api/comment/${commentId}`)
      .then(response => response.data)
      .then(data => {
        if (!data.ok) {
          dispatch(userActions.openModal(data.error));
        } else {
          dispatch(deleteComment(commentId));
        }
      })
      .catch(err => console.log(err));
  };
};

export const apiInputComment = (message, movieId) => {
  return dispatch => {
    axios
      .post(`/api/comment/${movieId}`, {
        message
      })
      .then(response => response.data)
      .then(data => {
        if (data.ok) {
          dispatch(apiGetComments(movieId));
        } else {
          dispatch(userActions.openModal("fail to write comment"));
        }
      })
      .catch(err => console.log(err));
  };
};

export const apiGetComments = movie_id => {
  return dispatch => {
    axios
      .get(`/api/comment/${movie_id}`)
      .then(response => response.data.comments)
      .then(comments => dispatch(setComments(comments)))
      .catch(err => console.log(err));
  };
};

export const apiGetMovieSuggestions = movie_id => {
  return dispatch => {
    axios
      .get(movie_suggestions_api_url + movie_id)
      .then(response => response.data.data.movies)
      .then(suggestions => dispatch(setMovieSuggestions(suggestions)))
      .catch(err => console.log(err));
  };
};

export const apiGetMovieDetail = movie_id => {
  return dispatch => {
    axios
      .get(movie_detail_api_url + movie_id)
      .then(response => response.data.data.movie)
      .then(movie => dispatch(setMovie(movie)))
      .catch(err => console.log(err));
  };
};

export const apiGetMovies = () => {
  return dispatch => {
    axios
      .get(movie_api_url)
      .then(response => response.data.data.movies)
      .then(movies => {
        dispatch(setMovies(movies));
      })
      .catch(err => console.log(err));
  };
};

//initial state
const initialState = {
  movies: null,
  movie_detail: null,
  movie_detail_visiable: false,
  movie_suggestions: null,
  comments: null
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return applySetMovies(state, action);
    case SET_MOVIE:
      return applySetMovie(state, action);
    case TURN_ON_DETAIL_VIEW:
      return applyTurnOnDetailView(state, action);
    case TURN_OFF_DETAIL_VIEW:
      return applyTurnOffDetailView(state, action);
    case REMOVE_MOVIE_DETAIL:
      return applyRemoveMovieDetail(state, action);
    case REMOVE_MOVIE_LIST:
      return applyRemoveMovieList(state, action);
    case SET_MOVIE_SUGGESTIONS:
      return applySetMovieSuggestions(state, action);
    case REMOVE_MOVIE_SUGGESTIONS:
      return applyRemoveMovieSuggestions(state, action);
    case SET_COMMENTS:
      return applySetComments(state, action);
    case REMOVE_COMMENTS:
      return applyRemoveComments(state, action);
    case DELETE_COMMENT:
      return applyDeleteComment(state, action);
    default:
      return state;
  }
}

//reducer actions

const applyDeleteComment = (state, action) => {
  const { id } = action;
  const updatedComments = state.comments.filter(comment => comment.id !== id);
  return {
    ...state,
    comments: updatedComments
  };
};

const applyRemoveComments = (state, action) => {
  return {
    ...state,
    comments: null
  };
};

const applySetComments = (state, action) => {
  const { comments } = action;
  return {
    ...state,
    comments
  };
};

const applyRemoveMovieSuggestions = (state, action) => {
  return {
    ...state,
    movie_suggestions: null
  };
};

const applySetMovieSuggestions = (state, action) => {
  const { suggestions } = action;
  return {
    ...state,
    movie_suggestions: suggestions
  };
};

const applyRemoveMovieList = (state, action) => {
  return {
    ...state,
    movies: null
  };
};

const applyRemoveMovieDetail = (state, action) => {
  return {
    ...state,
    movie_detail: null
  };
};

const applyTurnOffDetailView = (state, action) => {
  return {
    ...state,
    movie_detail_visiable: false
  };
};

const applyTurnOnDetailView = (state, action) => {
  return {
    ...state,
    movie_detail_visiable: true
  };
};

const applySetMovie = (state, action) => {
  const { movie } = action;
  return {
    ...state,
    movie_detail: movie
  };
};

const applySetMovies = (state, action) => {
  const { movies } = action;
  return {
    ...state,
    movies: movies
  };
};
