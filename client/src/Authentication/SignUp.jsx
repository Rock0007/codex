import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Components";

const Signup = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-xl w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Signup</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
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
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <Link
                  to="/login"
                  className="text-sm text-gray-500 hover:underline"
                >
                  Already Have an Account?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black w-full text-white py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:shadow-outline"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
