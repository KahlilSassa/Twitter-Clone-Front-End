import Home from "./landing/home/Home";
import Login from "./landing/login/Login";
import Profile from "./landing/profile/Profile";
import Register from "./landing/register/Register";
import {  Routes, Route, Navigate } from "react-router-dom";
import React, {Fragment} from 'react';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
        <Routes>
          <Route path="/" element={user ? <Home/> : <Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>


{/* 
          <Route path="/login" element={user ? <Navigate to='/login'/> : <Login/>}></Route>
          <Route path="/register" element={user ? <Navigate to='/register'/> : <Register/>}></Route> */}

{/* 
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/Home" element={<Home/>}></Route> */}
          <Route path="/Profile/:username" element={<Profile/>}></Route>  
        </Routes>

    </>
  );
}

export default App;
