import React from "react";
import { AiOutlineLoading3Quarters as Icon } from "@react-icons/all-files/ai/AiOutlineLoading3Quarters";

const LoadingSpinner = (): JSX.Element => {
  return (
    <div className="absolute top-14 right-5 py-2 px-4 no-underline focus:outline-none">
      <Icon className="text-gray-700 animate-spin text-2xl" />
    </div>
  );
};

export default LoadingSpinner;
