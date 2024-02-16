// WelcomeCard.jsx
import React from "react";

const WelcomeCard = () => {
  return (
    <div className="text-center mt-7 mx-4 lg:mx-auto">
      <h1 className="text-4xl lg:text-6xl font-extrabold text-black leading-tight mb-4">
        Welcome to Codex Club
      </h1>
      <p className="text-lg font-xl lg:text-xl text-gray-600 mb-5">
        Unleash Your Coding Potential, Forge Connections, Build Dreams
      </p>
      <button className="bg-gray-800 text-white py-2 px-4 rounded-full transition duration-300 hover:shadow-xl">
        Explore
      </button>
    </div>
  );
};

export default WelcomeCard;
