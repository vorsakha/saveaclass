import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./userThunk";

type StateTypes = {
  loading: boolean;
  error?: null | string;
  success?: null | string;
};

const slice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    clearUserAlert: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state: StateTypes) => {
        state.loading = false;
        state.success = "Account created.";
      })
      .addCase(signUp.pending, (state: StateTypes) => {
        state.loading = true;
      })
      .addCase(signUp.rejected, (state: StateTypes) => {
        state.loading = false;
        state.error = "Failed creating account.";
      });
  },
});

export default slice.reducer;

export const { clearUserAlert } = slice.actions;
