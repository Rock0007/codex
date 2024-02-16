import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      // Redirect the user to the Google authentication URL
      window.location.href = import.meta.env.VITE_REACT_APP_GOOGLE_AUTH;
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleGitHubLogin = async () => {
    try {
      window.location.href = import.meta.env.VITE_REACT_APP_GITHUB_AUTH;
    } catch (error) {
      console.error("GitHub login error:", error);
    }
  };

  const redirectToHome = () => {
    navigate("/home"); // Use navigate to navigate to the /home route
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-white">
      <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 text-center">
        Welcome to CodeX
      </h1>
      <h2 className="text-2xl font-semibold mb-6 text-black">
        Login with the following
      </h2>
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <button
          className="flex items-center bg-white border border-black text-black px-4 py-2 rounded-md cursor-pointer"
          onClick={() => {
            handleGoogleLogin();
            redirectToHome();
          }}
        >
          <FaGoogle className="mr-2" />
          Login with Google
        </button>
      </div>
      <div className="my-2 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <span className="text-gray-500">or</span>
      </div>
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        <button
          className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => {
            handleGitHubLogin();
            redirectToHome();
          }}
        >
          <FaGithub className="mr-2" />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Auth;
