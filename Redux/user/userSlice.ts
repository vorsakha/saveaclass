import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./userThunk";

type StateTypes = {
  loading: boolean;
  alert: {
    type: string | null;
    msg: string | null;
  };
};

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
      .addCase(signUp.fulfilled, (state: StateTypes) => {
        state.loading = false;
        state.alert = {
          type: "success",
          msg: "Account created.",
        };
      })
      .addCase(signUp.pending, (state: StateTypes) => {
        state.loading = true;
      })
      .addCase(signUp.rejected, (state: StateTypes) => {
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
