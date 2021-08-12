import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import "tailwindcss/tailwind.css";
import "../styles/utils.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
// import { NextComponentType, NextPageContext } from "next";
import { ReactElement } from "react";
import { render } from "@testing-library/react";

// Reducers
import authReducer from "../Redux/auth/authSlice";
import loadoutReducer from "../Redux/loadout/loadoutSlice";
import userReducer from "../Redux/user/userSlice";
import alertReducer from "../Redux/alert/alertSlice";
import codDataReducer from "../Redux/codData/codDataSlice";

// Types
// interface MyAppProps extends AppProps {
//   Component: {
//     Layout?: React.ExoticComponent<{
//       children?: React.ReactNode;
//     }>;
//   } & NextComponentType<NextPageContext, any, {}>;
// }
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

export function renderWithRedux(component: ReactElement) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

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
