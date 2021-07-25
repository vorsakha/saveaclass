import Head from "next/head";
import { useEffect } from "react";
import { useAppSelector } from "../Redux/utils/hooks";
import { useRouter } from "next/router";
import MyClasses from "../components/MyClasses";

const MyClassesPage = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) router.push("/");
  }, []);

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
