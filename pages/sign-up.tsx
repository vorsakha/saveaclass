import Head from "next/head";
import SignUp from "../components/SignUp";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Save a Class</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 md:px-20 text-center">
        <SignUp />
      </main>
    </>
  );
};

export default Home;
