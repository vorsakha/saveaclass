import React from "react";
import { useAppSelector } from "../Redux/hooks";
import LoadingSpinner from "./common/loading";
import useSignUp from "../hooks/useSignUp";

const SignUp: React.FC = () => {
  const { loading } = useAppSelector((state) => state.user);

  const { formInput, handleInputChange, handleSubmit } = useSignUp();

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
        <select
          className="text-gray-700 w-full py-2 px-3 focus:outline-none focus:ring ring-1 ring-black ring-opacity-20 rounded mb-2"
          name="platform"
          required
          onChange={(e) => handleInputChange(e)}
          value={formInput.platform}
        >
          <option className="text-gray-500" value="" disabled defaultValue="">
            Select
          </option>
          <option className="text-gray-700" value="psn">
            PlayStation
          </option>
          <option className="text-gray-700" value="steam">
            Steam
          </option>
          <option className="text-gray-700" value="xbl">
            XBOX
          </option>
          <option className="text-gray-700" value="battle">
            BattleNET
          </option>
          <option className="text-gray-700" value="acti">
            Activision ID
          </option>
        </select>
        <div className="flex justify-center mt-2">
          <button
            className={`hover:bg-green-600 px-6 py-2 rounded font-medium inline-block shadow-lg bg-green-500 focus:bg-green-600 ring-black ring-opacity-5 transition ease-in-out disabled:opacity-40`}
            disabled={loading}
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
