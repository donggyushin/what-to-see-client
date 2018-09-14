import { combineReducers } from "redux";
import user from "./user";
import movies from "./movies";
import reply from "./reply";
import star from "./star";

export default combineReducers({
  user,
  movies,
  reply,
  star
});
