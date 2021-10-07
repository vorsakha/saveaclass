import { createSlice } from "@reduxjs/toolkit";
import { loadUser, logUser } from "./authThunk";

const tokenTest = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  } else {
    return null;
  }
};

const slice = createSlice({
  name: "auth",
  initialState: {
    token: tokenTest(),
    user: null,
    gamertag: null,
    platform: null,
    admin: false,
    loggedIn: false,
    loading: false,
    alert: {
      type: null,
      msg: null,
    },
  } as AuthStateTypes,

  reducers: {
    signOut: (state) => {
      state.loggedIn = false;
      state.admin = false;
      state.gamertag = null;
      state.platform = null;
      localStorage !== undefined && localStorage.removeItem("token");
      state.token = null;
      state.alert = {
        type: null,
        msg: null,
      };
      state.loading = false;
      state.user = null;
    },
    clearAuthAlert: (state) => {
      state.alert = {
        type: null,
        msg: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logUser.fulfilled, (state, action) => {
        localStorage !== undefined &&
          localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.admin = action.payload.admin;
        state.gamertag = action.payload.gamertag;
        state.platform = action.payload.platform;
        state.loggedIn = true;
        state.loading = false;
      })
      .addCase(logUser.pending, (state) => {
        state.loading = true;
        state.alert = {
          type: null,
          msg: null,
        };
      })
      .addCase(logUser.rejected, (state) => {
        state.loggedIn = false;
        state.loading = false;
        state.alert = {
          type: "danger",
          msg: "Invalid Credentials",
        };
        state.user = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.admin = action.payload.admin;
        state.user = action.payload.user;
        state.gamertag = action.payload.gamertag;
        state.platform = action.payload.platform;
        state.loggedIn = true;
        state.loading = false;
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.rejected, (state) => {
        state.loggedIn = false;
        state.loading = false;
      });
  },
});

export default slice.reducer;

export const { signOut, clearAuthAlert } = slice.actions;
