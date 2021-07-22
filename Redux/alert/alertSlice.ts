import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateTypes = {
  show: boolean;
  type: string | null;
  msg: string | null;
};

type ActionTypes = {
  type: string;
  msg: string | null;
};

const slice = createSlice({
  name: "alert",
  initialState: {
    show: false,
    type: null,
    msg: null,
  },
  reducers: {
    clearAlert: (state: StateTypes) => {
      state.show = false;
      state.type = null;
      state.msg = null;
    },
    generateAlert: (state: StateTypes, action: PayloadAction<ActionTypes>) => {
      state.show = true;
      state.type = action.payload.type;
      state.msg = action.payload.msg;
    },
  },
});

export default slice.reducer;

export const { generateAlert, clearAlert } = slice.actions;
