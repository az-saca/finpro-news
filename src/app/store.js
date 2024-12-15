import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../redux/newsSlice";
import savedReducer from "../redux/savedSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    saved: savedReducer,
  },
});

// export default store;
