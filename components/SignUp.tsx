import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { generateAlert } from "../Redux/alert/alertSlice";
import { signUp } from "../Redux/user/userThunk";
import { useAppDispatch, useAppSelector } from "../Redux/utils/hooks";
import LoadingSpinner from "./common/loading";

// Types
type FormTypes = {
  email: string;
  password: string;
  password2: string;
  gamertag: string;
  platform: string;
};

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector((state) => state);

  let router = useRouter();

  const [formInput, setFormInput] = useState<FormTypes>({
    email: "",
    password: "",
    password2: "",
    gamertag: "",
    platform: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formInput.email !== "" || formInput.password !== "") {
      if (formInput.password === formInput.password2) {
        dispatch(signUp(formInput));

        // router.push("/");
      } else {
        dispatch(
          generateAlert({ type: "danger", msg: "Passwords don't match" })
        );
      }
    }
  };

  useEffect(() => {
    if (auth.loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [auth.loading]);

  return (
    <div className="w-full max-w-md mt-6">
      <form
        className="bg-gray-600 shadow-lg rounded px-12 pt-6 pb-8 mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        {loading && <LoadingSpinner />}
        <h1 className="text-2xl flex justify-center border-b-2 py-2 mb-4 border-gray-500">
          Sign Up
        </h1>
        <input
          className="shadow text-gray-700 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleInputChange(e)}
          value={formInput.email}
          required
          autoComplete="email"
        />
        <input
          className="shadow text-gray-700  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
          type="text"
          name="gamertag"
          placeholder="Gamertag"
          onChange={(e) => handleInputChange(e)}
          value={formInput.gamertag}
          required
          autoComplete="current-password"
        />
        <input
          className="shadow text-gray-700  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
          type="text"
          name="platform"
          placeholder="Platform"
          onChange={(e) => handleInputChange(e)}
          value={formInput.platform}
          required
          autoComplete="current-password"
        />

        <input
          className="shadow text-gray-700  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleInputChange(e)}
          value={formInput.password}
          required
          autoComplete="current-password"
        />
        <input
          className="shadow text-gray-700  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring ring-1 ring-black ring-opacity-5 mb-2"
          type="password"
          name="password2"
          placeholder="Repeat Password"
          onChange={(e) => handleInputChange(e)}
          value={formInput.password2}
          required
          autoComplete="current-password"
        />
        <div className="flex justify-center mt-2">
          <button
            className={`hover:bg-green-600 px-6 py-2 rounded font-medium inline-block shadow-lg bg-green-500 focus:bg-green-600 ring-black ring-opacity-5 transition ease-in-out disabled:opacity-40`}
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;