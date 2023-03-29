import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import addFavoriteReducer from "./addFavoriteReducer";
const reducers = combineReducers({
  movieReducerState: movieReducer,
  favoriteReducerState: addFavoriteReducer,
});
export default reducers;
