import React from "react";
import { signOut } from "../Redux/auth/authSlice";
import { useAppSelector } from "../Redux/utils/hooks";
import Button from "./common/button";
import NextLink from "./common/nextLink";

const Navbar: React.FC = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);

  return (
    <div className="min-w-screen h-14 px-4 border-b border-gray-600">
      <div className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg">
        <p className="md:text-2xl uppercase text-xl text-green-500 font-blops">
          Save A Class
        </p>
        <div className="flex flex-row justify-end">
          <NextLink success href="/">
            <a>About</a>
          </NextLink>
          {loggedIn ? (
            <Button
              danger
              click={() => signOut()}
              className="md:ml-8 ml-4 bg-red-500"
            >
              Logout
            </Button>
          ) : (
            <NextLink success href="/sign-up">
              <a className="md:ml-8 ml-4">Create account</a>
            </NextLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
