import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "../styles/utils.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import store from "../Redux/store";
import { ReactElement } from "react";
import { render } from "@testing-library/react";

// testing library
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
