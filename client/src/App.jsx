import React from "react";
import axios from "axios";
import { Main } from "./Containers/index";
import { Auth } from "./Authentication/index";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;
