//import
import axios from "axios";

const movie_api_url =
  "https://yts.am/api/v2/list_movies.json?sort_by=download_count&limit=50";

//actions
const SET_MOVIES = "movies/SET_MOVIES";

//action creators
export const setMovies = movies => ({
  type: SET_MOVIES,
  movies
});

//api action creators

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
  movies: null
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return applySetMovies(state, action);

    default:
      return state;
  }
}

//reducer actions

const applySetMovies = (state, action) => {
  const { movies } = action;
  return {
    ...state,
    movies: movies
  };
};
