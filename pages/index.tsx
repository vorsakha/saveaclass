import Head from "next/head";

// Redux
import { useAppSelector } from "../Redux/utils/hooks";

// Components
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

const Home = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  return (
    <>
      <Head>
        <title>{loggedIn ? "Save a Class" : "Login | Save a Class"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 md:px-20 text-center">
        {loggedIn ? <Dashboard /> : <Login />}
      </main>
    </>
  );
};

export default Home;
