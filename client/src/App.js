import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./comoponents/Signup";
import ProtectedRoutes from "./ProtestedRoutes";
import Login from "./comoponents/Login";



function App() {
  return (

    <Routes>
        <Route path="/login"  element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Signup />} />
      </Route>
    </Routes>


  );
}

export default App;
