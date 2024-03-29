import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components/index";

const Login = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-xl w-full max-w-md mx-4 sm:mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="usernameOrEmail"
                className="block text-gray-700 text-sm font-medium"
              >
                Username or Email
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <Link
                  to="/forgotpassword"
                  className="text-sm text-gray-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div>
                <Link
                  to="/signup"
                  className="text-sm text-gray-500 hover:underline"
                >
                  Don't have an account?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black w-full text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
