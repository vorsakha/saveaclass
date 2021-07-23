import React from "react";
import Alert from "./alert";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-w-screen bg-gray-700">
      <Navbar />
      <Alert />
      <div className="flex flex-col items-center justify-center m-auto max-w-screen-lg min-h-total px-4 z-0">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
