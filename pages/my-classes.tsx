import Head from "next/head";
import MyClasses from "../components/MyClasses";
import useCheckIfLoggedIn from "../hooks/useCheckIfLoggedIn";

const MyClassesPage = () => {
  useCheckIfLoggedIn();

  return (
    <>
      <Head>
        <title>{"My Classes | Save a Class"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyClasses />
    </>
  );
};

export default MyClassesPage;
