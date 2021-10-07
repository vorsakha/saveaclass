import Head from "next/head";
import { useAppSelector } from "../Redux/hooks";

import Dashboard from "../components/Dashboard";
import About from "../components/About";
import useLoadUser from "../hooks/useLoadUser";

const Home = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  useLoadUser();

  return (
    <>
      <Head>
        <title>
          {loggedIn ? "Dashboard | Save a Class" : "Home | Save a Class"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loggedIn ? <Dashboard /> : <About />}
    </>
  );
};

export default Home;
