import Link from "next/link";

const About = () => {
  return (
    <div className="">
      <h1 className="flex flex-col text-center mb-8 md:block md:text-6xl text-5xl font-bold">
        Welcome to{" "}
        <span className="text-green-500 font-blops font-thin uppercase w-full">
          Save a Class
        </span>
      </h1>

      <p className="text-center text-xl mb-8">
        Save a class is a app that grabs your Modern Warfare(2019) match history
        data, so you can save your best loadouts! We use Activision API to fetch
        multiplayer data by gamertag.
      </p>

      <div className="w-full justify-center flex flex-row items-center">
        <div className="px-4">
          <Link href="/login">
            <a className="hover:bg-green-600 bg-green-500 focus:bg-green-600  shadow-lg text-gray-200 px-6 py-2 rounded font-medium inline-block ring-black ring-opacity-5 transition ease-in-out disabled:opacity-40">
              Login
            </a>
          </Link>
        </div>
        <div className="px-4">
          <Link href="/sign-up">
            <a className="hover:bg-green-600 bg-green-500 focus:bg-green-600  shadow-lg text-gray-200 px-6 py-2 rounded font-medium inline-block ring-black ring-opacity-5 transition ease-in-out disabled:opacity-40">
              Create Account
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
