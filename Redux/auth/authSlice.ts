import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadUser, logUser } from "./authThunk";

// Types
type StateTypes = {
  loggedIn?: boolean;
  admin?: boolean;
  token?: string | null;
  error?: string | null;
  loading: boolean;
  user?: string | null;
};

type LogPayload = {
  data: {
    token: string;
    user: string;
    admin: boolean;
  };
};

const slice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    user: null,
    admin: false,
    loggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    signOut: (state: StateTypes) => {
      state.loggedIn = false;
      state.admin = false;
      localStorage.removeItem("token");
      state.token = null;
      state.error = null;
      state.loading = false;
      state.user = null;
    },
    clearAuthAlert: (state: StateTypes) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        logUser.fulfilled,
        (state: StateTypes, action: PayloadAction<LogPayload>) => {
          localStorage.setItem("token", action.payload.data.token);
          state.token = action.payload.data.token;
          state.user = action.payload.data.user;
          state.admin = action.payload.data.admin;
          state.loggedIn = true;
          state.loading = false;
        }
      )
      .addCase(logUser.pending, (state: StateTypes) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logUser.rejected, (state: StateTypes) => {
        state.loggedIn = false;
        state.loading = false;
        state.error = "Invalid Credentials";
        state.user = null;
      })
      .addCase(
        loadUser.fulfilled,
        (state: StateTypes, action: PayloadAction<LogPayload>) => {
          state.admin = action.payload.data.admin;
          state.user = action.payload.data.user;
          state.loggedIn = true;
          state.loading = false;
        }
      )
      .addCase(loadUser.pending, (state: StateTypes) => {
        state.loading = true;
      })
      .addCase(loadUser.rejected, (state: StateTypes) => {
        state.loggedIn = false;
        state.loading = false;
      });
  },
});

export default slice.reducer;

export const { signOut, clearAuthAlert } = slice.actions;
