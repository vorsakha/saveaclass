import Head from "next/head";
import { useEffect } from "react";

// Redux
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import { loadUser } from "../Redux/auth/authThunk";

// Components
import Dashboard from "../components/Dashboard";
import About from "../components/About";

const Home = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <Head>
        <title>
          {loggedIn ? "Dashboard | Save a Class" : "Login | Save a Class"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loggedIn ? <Dashboard /> : <About />}
    </>
  );
};

export default Home;
