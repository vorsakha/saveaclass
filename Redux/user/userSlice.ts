import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./userThunk";

const slice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    alert: {
      type: null,
      msg: null,
    },
  },
  reducers: {
    clearUserAlert: (state) => {
      state.alert = {
        type: null,
        msg: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state: UserStateTypes) => {
        state.loading = false;
        state.alert = {
          type: "success",
          msg: "Account created.",
        };
      })
      .addCase(signUp.pending, (state: UserStateTypes) => {
        state.loading = true;
      })
      .addCase(signUp.rejected, (state: UserStateTypes) => {
        state.loading = false;
        state.alert = {
          type: "danger",
          msg: "Failed creating account.",
        };
      });
  },
});

export default slice.reducer;

export const { clearUserAlert } = slice.actions;
