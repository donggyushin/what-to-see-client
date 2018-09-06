//import
import axios from "axios";

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

//action creators

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
  movie_suggestions: null
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
    default:
      return state;
  }
}

//reducer actions
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
