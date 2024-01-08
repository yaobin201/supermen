import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    showContact: false,
    globalDrawer: 'contact'
  },
  reducers: {
    switchShowContact: (state, action) => {
      state.showContact = action.payload;
      state.globalDrawer = 'contact'
    },
    switchGlobalDrawer: (state, action) => {
      state.showContact = action.payload;
      state.globalDrawer = 'menu'
    }
  }
});
export const { switchShowContact,switchGlobalDrawer } = globalSlice.actions;
export default globalSlice.reducer;