import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import "tailwindcss/tailwind.css";
import "../styles/utils.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";

// Types
interface MyAppProps extends AppProps {
  Component: {
    Layout?: React.ExoticComponent<{
      children?: React.ReactNode;
    }>;
  } & NextComponentType<NextPageContext, any, {}>;
}

// Reducers
import authReducer from "../Redux/auth/authSlice";
import loadoutReducer from "../Redux/loadout/loadoutSlice";
import userReducer from "../Redux/user/userSlice";
import alertReducer from "../Redux/alert/alertSlice";

// Redux Config
const reducer = combineReducers({
  auth: authReducer,
  loadouts: loadoutReducer,
  user: userReducer,
  alert: alertReducer,
});

// Redux store
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
