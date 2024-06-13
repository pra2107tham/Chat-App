import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";  
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const {authUser} = useAuthContext()
  return (
     <div  className="p-4 h-screen flex justify-center items-center">
    <Routes>
      <Route path="/" element={authUser ? <Home/> : <Login/>} />
      <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login />} />
      <Route path="/signup" element={authUser ? <Navigate to="/"/> : <SignUp />} />
    </Routes>
    <Toaster/>
  </div>
  )
};

export default App;
