import Head from "next/head";
import Login from "../components/Login";

const Home = () => {
  return (
    <>
      <Head>
        <title>Save a Class</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Save a Class
          </a>
        </h1>
        <Login />
      </main>
    </>
  );
};

export default Home;
