import React from "react";
import { NETFLIX_LOGO_PATH } from "../utils/Constants";
import avatar from "../Assets/Netflix-avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between items-center absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black px-8 py-2 ">
      <img className="w-52" src={NETFLIX_LOGO_PATH} alt="logo" />

      {user && (
        <div className="flex items-center">
          <img src={user?.photoURL ? user?.photoURL : avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <button onClick={handleSignout} className="ml-4 bg-red-700 text-white px-4 py-2 rounded-lg">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
