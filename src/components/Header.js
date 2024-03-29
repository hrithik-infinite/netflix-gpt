import React, { useEffect } from "react";
import { NETFLIX_LOGO_PATH } from "../utils/Constants";
import avatar from "../Assets/Netflix-avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
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
  const handleGPTClick = () => {
    dispatch(toggleGPTSearchView());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black px-8 py-2 ">
      <img className="w-52" src={NETFLIX_LOGO_PATH} alt="logo" />

      {user && (
        <div className="flex items-center">
          <button
            onClick={handleGPTClick}
            className="text-black px-4 py-2 mx-4 bg-white rounded-lg"
          >
            <AutoAwesomeIcon style={{ fontSize: "large" }} />
            {showGPTSearch ? "  Home Page" : "  AI Search"}
          </button>
          <img
            src={user?.photoURL ? user?.photoURL : avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <button
            onClick={handleSignout}
            className="ml-4 bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
