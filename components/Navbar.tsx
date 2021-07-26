import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { GiConvergenceTarget } from "@react-icons/all-files/gi/GiConvergenceTarget";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const handleLogout = () => {
    dispatch(signOut());
    dispatch(clearCodData());
    dispatch(clearLoadouts());
    localStorage.removeItem("token");

    router.push("/");

    setMobileMenu(false);
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
            mobileMenu
              ? "absolute bg-gray-600 flex flex-column flex-wrap mt-14 right-0 top-0 py-8 w-screen text-center justify-center overflow-hidden text-xl border-b border-green-500 shadow-sm z-50"
              : "hidden"
          } sm:flex sm:flex-row sm:justify-end items-center`}
        >
          <NextLink
            className="sm:mr-8 w-full py-4 sm:w-auto"
            success
            href="/"
            click={() => setMobileMenu(false)}
          >
            {loggedIn ? "Dashboard" : "Home"}
          </NextLink>
          {!loggedIn && (
            <NextLink
              className=" w-full py-4 sm:w-auto"
              success
              href="/login"
              click={() => setMobileMenu(false)}
            >
              Login
            </NextLink>
          )}
          {loggedIn && (
            <>
              <NextLink
                className="w-full sm:w-auto py-4"
                success
                href="/my-classes"
                click={() => setMobileMenu(false)}
              >
                My Classes
              </NextLink>
            </>
          )}
          {loggedIn ? (
            <Button
              danger
              click={handleLogout}
              className="w-full my-4 sm:w-auto md:ml-8 mr-4 ml-4 bg-red-500"
            >
              Logout
            </Button>
          ) : (
            <NextLink
              click={() => setMobileMenu(false)}
              success
              href="/sign-up"
              className="md:ml-8 ml-4"
            >
              Create account
            </NextLink>
          )}
        </div>
        <div className="flex align-center sm:hidden">
          <button
            className={`${mobileMenu ? "hidden" : "block"}`}
            onClick={() => setMobileMenu(true)}
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>
          <button
            className={`${mobileMenu ? "block" : "hidden"}`}
            onClick={() => setMobileMenu(false)}
          >
            <GiConvergenceTarget className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
