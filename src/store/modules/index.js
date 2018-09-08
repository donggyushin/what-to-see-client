import { combineReducers } from "redux";
import user from "./user";
import movies from "./movies";
import reply from "./reply";

export default combineReducers({
  user,
  movies,
  reply
});
