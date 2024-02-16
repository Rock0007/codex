import React from "react";
import axios from "axios";
import { Main } from "./Containers/index";
import { Login } from "./Authentication/index";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { Blog, Community, Events, Home, News, Team } from "./Components/index";

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;
