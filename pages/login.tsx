import Head from "next/head";
import { useEffect } from "react";

// Redux
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import { loadUser } from "../Redux/auth/authThunk";
// import { loadLoadouts } from "../Redux/loadout/loadoutThunk";

// Components
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

const Home = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
    // dispatch(loadLoadouts());
  }, []);

  return (
    <>
      <Head>
        <title>{loggedIn ? "Save a Class" : "Login | Save a Class"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </>
  );
};

export default Home;
