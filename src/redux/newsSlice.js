import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Action untuk mengambil berita dari API
export const fetchNews = createAsyncThunk("news/fetchNews", async (params) => {
  const { query, fq } = params;
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      fq: fq,
      begin_date: "20230715",
      end_date: "20240828",
      "api-key": API_KEY,
    },
  });
  console.log(response.data.response.docs);
  return response.data.response.docs;
});

//Slice untuk mengelola state berita
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        // Menampilkan loading ketika fetch data
        if (state.articles.length === 0) {
          state.loading = true;
        }
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        // Menyimpan data ke state ketika fetch data berhasil
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        // Menampilkan error ketika fetch data gagal
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
