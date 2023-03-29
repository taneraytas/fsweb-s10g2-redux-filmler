import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      let addedMovieList = action.payload;
      addedMovieList = { ...addedMovieList, id: Date.now() };
      const finalList = [...state.movies, addedMovieList];
      return { ...state, movies: finalList };
    default:
      return state;
  }
};

export default reducer;
