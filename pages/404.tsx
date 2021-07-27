import Head from "next/head";

const Error = () => {
  return (
    <>
      <Head>
        <title>Error | Save a Class</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-total justify-center items-center">
        <h1 className="text-2xl">404 Error | Page not found.</h1>
      </div>
    </>
  );
};

export default Error;
