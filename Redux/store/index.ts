import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducers
import authReducer from "../auth/authSlice";
import loadoutReducer from "../loadout/loadoutSlice";
import userReducer from "../user/userSlice";
import alertReducer from "../alert/alertSlice";
import codDataReducer from "../codData/codDataSlice";

// Redux Config
const reducer = combineReducers({
  auth: authReducer,
  loadout: loadoutReducer,
  user: userReducer,
  alert: alertReducer,
  codData: codDataReducer,
});

// Redux store
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
