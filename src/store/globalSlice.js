import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    showContact: false
  },
  reducers: {
    switchShowContact: (state, action) => {
      state.showContact = action.payload;
    },
  }
});
export const { switchShowContact } = globalSlice.actions;
export default globalSlice.reducer;