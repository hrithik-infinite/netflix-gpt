import React from "react";
import { NETFLIX_LOGO_PATH } from "../utils/Constants";

const Header = () => {
  return (
    <div className="absolute w-full z-10 px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-52" src={NETFLIX_LOGO_PATH} alt="logo" />
    </div>
  );
};

export default Header;
