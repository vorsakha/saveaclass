import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMpData } from "./codDataThunk";

// Types
type CodDataTypes = {
  matches: {
    matchID: string;
    map: string;
    mode: string;
    result: string;
    player: {
      loadout: {
        primaryWeapon: {
          label: string;
          imageLoot: string;
          imageIcon: string;
          attachments: {
            name: string;
          }[];
        };
        secondaryWeapon: {
          label: string;
          imageLoot: string;
          imageIcon: string;
          attachments: {
            name: string;
          }[];
        };
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
        killstreaks: {
          label: string;
          name: string;
        }[];
        tactical: {
          label: string;
          image: string;
        };
        lethal: {
          label: string;
          image: string;
        };
      }[];
    };
    playerStats: {
      kills: number;
      score: number;
      headshots: number;
      assists: number;
      scorePerMinute: number;
      kdRatio: number;
      longestStreak: number;
    };
  }[];
};

const slice = createSlice({
  name: "codData",
  initialState: {
    data: null,
    loading: false,
    alert: {
      type: null,
      msg: null,
    },
  } as CodStateTypes,
  reducers: {
    clearCodData: (state) => {
      state.loading = false;
      state.data = null;
    },
    clearCodDataAlert: (state) => {
      state.alert = {
        type: null,
        msg: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getMpData.fulfilled,
        (state, action: PayloadAction<CodDataTypes>) => {
          state.loading = false;
          state.data = action.payload !== undefined ? action.payload : null;
        }
      )
      .addCase(getMpData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMpData.rejected, (state) => {
        state.loading = false;
        state.alert = {
          type: "danger",
          msg: "Failed loading player data.",
        };
      });
  },
});

export default slice.reducer;

export const { clearCodData, clearCodDataAlert } = slice.actions;
