import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadLoadouts, createLoadout, deleteLoadout } from "./loadoutThunk";

type StateTypes = {
  loadouts?: any;
  loading: boolean;
  error?: null | string;
  success?: null | string;
};

const slice = createSlice({
  name: "loadout",
  initialState: {
    loadouts: [{}],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    clearLoadouts: (state) => {
      state.loading = false;
      state.loadouts = [{}];
    },
    clearLoadoutsAlert: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loadLoadouts.fulfilled,
        (state: StateTypes, action: PayloadAction<object>) => {
          state.loading = false;
          state.loadouts = action.payload;
        }
      )
      .addCase(loadLoadouts.pending, (state: StateTypes) => {
        state.loading = true;
      })
      .addCase(loadLoadouts.rejected, (state: StateTypes) => {
        state.loading = false;
        state.error = "Failed loading loadouts.";
      })
      .addCase(createLoadout.fulfilled, (state: StateTypes) => {
        state.loading = false;
        state.success = "Loadout saved.";
      })
      .addCase(createLoadout.pending, (state: StateTypes) => {
        state.loading = true;
      })
      .addCase(createLoadout.rejected, (state: StateTypes) => {
        state.loading = false;
        state.error = "Failed saving loadouts.";
      })
      .addCase(
        deleteLoadout.fulfilled,
        (state: StateTypes, action: PayloadAction<object>) => {
          state.loading = false;
          state.success = "Loadout deleted.";
          state.loadouts = action.payload;
        }
      )
      .addCase(deleteLoadout.pending, (state: StateTypes) => {
        state.loading = true;
      })
      .addCase(deleteLoadout.rejected, (state: StateTypes) => {
        state.loading = false;
        state.error = "Failed deleting loadouts.";
      });
  },
});

export default slice.reducer;

export const { clearLoadouts, clearLoadoutsAlert } = slice.actions;
