import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Reg from "../pages/Reg/Reg";
import Main from "../pages/Main";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/reg" element={<Reg />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Router;
