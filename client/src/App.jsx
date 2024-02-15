import React from "react";
import axios from "axios";
import { Main } from "./Containers/index";
import { Auth } from "./Authentication/index";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import { Home } from "./Components/index";

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;
