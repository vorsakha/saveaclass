import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="min-w-screen h-14 px-4 border-b border-gray-600">
      <div className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg">
        <p className="md:text-2xl uppercase text-xl text-green-500 font-blops">
          Save A Class
        </p>
        <div className="flex flex-row justify-end">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/sign-up">
            <a className="md:ml-8 ml-4">Create account</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
