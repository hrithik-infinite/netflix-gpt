import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE_URL } from "../utils/Constants";
import { checkValidSignInData } from "../utils/validations";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState([]);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pswdRef = useRef(null);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmitBtn = () => {
    setErrorMsg(null);
    const email = emailRef.current.value;
    const password = pswdRef.current.value;
    const name = !isSignInForm ? nameRef.current.value : "";
    const validationError = checkValidSignInData(email, password);
    if (validationError) {
      setErrorMsg(validationError);
      return;
    } else {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name,
              photoURL: "https://fastly.picsum.photos/id/942/200/200.jpg?hmac=Gh7W-H3ZGmweB9STLwQvq-IHkxrVyawHVTKYxy-u9mA",
            })
              .then(() => {
                console.log("user", user);
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
              })
              .catch((error) => {
                setErrorMsg(error.message);
              });
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("user", user);
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      }
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute z-0 inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }} />
      <div className="absolute z-5 inset-0 flex justify-center items-center">
        <form onSubmit={(e) => e.preventDefault()} className="bg-[#000000bf] p-8 shadow-md rounded-lg w-96">
          <h1 className="text-white font-bold text-3xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input ref={nameRef} type="text" placeholder="Full Name" className="text-white p-2 m-2 w-full bg-[#333]" />}
          <input ref={emailRef} type="text" placeholder="Email" className="text-white p-2 m-2 w-full bg-[#333]" />
          <input ref={pswdRef} type="password" placeholder="Password" className="text-white p-2 m-2 w-full bg-[#333]" />
          {errorMsg && <p className="ps-2 text-red-500">{errorMsg}</p>}
          <button className="p-4 mt-10 m-2 w-full bg-[#e50914] text-white font-semibold rounded" onClick={handleSubmitBtn}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-md mt-4">
            {isSignInForm ? "New to NetflixGPT? " : "Already a member? "}
            <span className="text-[#e50914] cursor-pointer" onClick={toggleSignUpForm}>
              {isSignInForm ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
