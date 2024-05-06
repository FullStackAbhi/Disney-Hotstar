import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducers from "../features/USER/userSlice";
import movieReducer from "../features/movies/movieSlice";

export default configureStore({
  reducer: {
    user: userReducers,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
