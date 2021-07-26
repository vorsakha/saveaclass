import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "../Redux/auth/authSlice";
import { clearCodData } from "../Redux/codData/codDataSlice";
import { clearLoadouts } from "../Redux/loadout/loadoutSlice";
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import Button from "./common/button";
import NextLink from "./common/nextLink";

const Navbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const { loggedIn } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOut());
    dispatch(clearCodData());
    dispatch(clearLoadouts());
  };

  return (
    <div className="min-w-screen h-14 px-4">
      <div className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg border-b border-gray-600">
        <Link href="/">
          <a className="md:text-2xl uppercase text-xl text-green-500 font-blops">
            Save A Class
          </a>
        </Link>
        <div
          className={`${
            mobileMenu ? "flex-column min-h-screen justify-center" : "hidden"
          } sm:flex sm:flex-row sm:justify-end items-center`}
        >
          {loggedIn && (
            <>
              <NextLink className="mr-8" success href="/">
                Dashboard
              </NextLink>
              <NextLink success href="/my-classes">
                My Classes
              </NextLink>
            </>
          )}
          {loggedIn ? (
            <Button
              danger
              click={handleLogout}
              className="md:ml-8 ml-4 bg-red-500"
            >
              Logout
            </Button>
          ) : (
            <NextLink success href="/sign-up" className="md:ml-8 ml-4">
              Create account
            </NextLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
