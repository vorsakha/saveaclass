import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadLoadouts, createLoadout, deleteLoadout } from "./loadoutThunk";

type LoadoutTypes =
  | {
      _id: string;
      matchId: string;
      primary: string;
      secondary: string;
      perks: {
        image: string | null;
        imageProgression: string;
        name: string;
        label: string;
        imageMainUi: string;
      }[];
      extraPerks: {
        image: string | null;
        imageProgression: string;
        name: string;
        label: string;
        imageMainUi: string;
      }[];
      tactical: string;
      lethal: string;
      kdRatio: number;
      killstreaks: {
        label: string;
        name: string;
      }[];
    }[];

type StateTypes = {
  loadouts: LoadoutTypes | [];
  loading: boolean;
  alert: {
    type: string | null;
    msg: string | null;
  };
};

const slice = createSlice({
  name: "loadout",
  initialState: {
    loadouts: [],
    loading: false,
    alert: {
      type: null,
      msg: null,
    },
  } as StateTypes,
  reducers: {
    clearLoadouts: (state) => {
      state.loading = false;
      state.loadouts = [];
    },
    clearLoadoutsAlert: (state) => {
      state.alert = {
        type: null,
        msg: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loadLoadouts.fulfilled,
        (state, action: PayloadAction<LoadoutTypes>) => {
          state.loading = false;
          state.loadouts = action.payload;
        }
      )
      .addCase(loadLoadouts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadLoadouts.rejected, (state) => {
        state.loading = false;
        state.alert = {
          type: "danger",
          msg: "Failed loading classes.",
        };
      })
      .addCase(createLoadout.fulfilled, (state) => {
        state.loading = false;
        state.alert = {
          type: "success",
          msg: "Loadout saved.",
        };
      })
      .addCase(createLoadout.pending, (state) => {
        state.loading = true;
      })
      .addCase(createLoadout.rejected, (state) => {
        state.loading = false;
        state.alert = {
          type: "danger",
          msg: "Failed saving class.",
        };
      })
      .addCase(
        deleteLoadout.fulfilled,
        (state, action: PayloadAction<LoadoutTypes>) => {
          state.loading = false;
          state.alert = {
            type: "success",
            msg: "Class deleted.",
          };
          state.loadouts = action.payload;
        }
      )
      .addCase(deleteLoadout.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteLoadout.rejected, (state) => {
        state.loading = false;
        state.alert = {
          type: "danger",
          msg: "Failed deleting class.",
        };
      });
  },
});

export default slice.reducer;

export const { clearLoadouts, clearLoadoutsAlert } = slice.actions;
