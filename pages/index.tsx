import Head from "next/head";
import Login from "../components/Login";

const Home = () => {
  return (
    <>
      <Head>
        <title>Login | Save a Class</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 md:px-20 text-center">
        <h1 className="flex flex-col md:block md:text-6xl text-5xl font-bold">
          Welcome to{" "}
          <span className="text-green-500  w-full">Save a Class</span>
        </h1>
        <Login />
      </main>
    </>
  );
};

export default Home;
