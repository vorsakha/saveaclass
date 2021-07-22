import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="min-w-screen h-14 px-4">
      <div className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg">
        <p className="uppercase text-2xl">logo</p>
        <div>
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-900">Home</a>
          </Link>
          <Link href="/sign-up">
            <a className="text-blue-600 hover:text-blue-900 ml-6">
              Create account
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
