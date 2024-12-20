import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../redux/newsSlice";
import savedReducer from "../redux/savedSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer, // Menghubungkan state berita ke aplikasi
    saved: savedReducer, // Menghubungkan state berita yang disimpan
  },
});
