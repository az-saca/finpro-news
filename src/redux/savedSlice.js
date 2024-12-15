import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: [],
  reducers: {
    addToSaved: (state, action) => {
      state.push(action.payload);
    },
    removeFromSaved: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id);
    },
  },
});

export const { addToSaved, removeFromSaved } = savedSlice.actions;
export default savedSlice.reducer;
