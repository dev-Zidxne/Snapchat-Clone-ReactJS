import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectCameraImage } from "./cameraSlice";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    selectedImage: null,
  },

  reducers: {
    login: (state, action) => {
      state.value += action.payload;
    },
    logout: (state, action) => {
      (state.selectedImage = state), action;
    },
    resetImage: (state) => {
      state.selectedImage = null;
    },
  },
});
export const { incrementByAmount } = appSlice.actions;

export const selectUser = (state) => state.app.user;
export const selectSelectedImage = (state) => state.app.selectedImage;

export default appSlice.reducer;
