import React from "react";
import logo from "../assets/logo.png";

const LogoLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={logo} alt="Logo" className="w-36 h-36 animate-bounce" />
    </div>
  );
};

export default LogoLoader;
