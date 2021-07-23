import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-14 border-t border-gray-600">
      <p className="text-center text-gray-400 text-xs">
        &copy;2021{" "}
        <span className="font-blops text-gray-400">Save A Class</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
