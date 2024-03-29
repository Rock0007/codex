import React from "react";
import { Navbar, WelcomeCard } from "./index";
const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <WelcomeCard />
    </div>
  );
};

export default Home;
