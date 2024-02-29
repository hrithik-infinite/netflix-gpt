import React, { useState } from "react";
import Header from "./Header";
import { BACKGROUND_IMAGE_URL } from "../utils/Constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute z-0 inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }} />
      <div className="absolute inset-0 flex justify-center items-center">
        <form className="bg-[#000000bf] p-8 shadow-md rounded-lg w-96">
          <h1 className="text-white font-bold text-3xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 m-2 w-full bg-[#333]" />}
          <input type="text" placeholder="Email" className="p-2 m-2 w-full bg-[#333]" />
          <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-[#333]" />
          <button className="p-4 mt-10 m-2 w-full bg-[#e50914] text-white font-semibold rounded">{isSignInForm ? "Sign In" : "Sign Up"}</button>
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
