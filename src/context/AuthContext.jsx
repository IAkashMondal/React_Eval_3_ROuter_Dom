import React, {useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let navigate=useNavigate()
  let [auth,setAuth]=useState(false)
  let [email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  
  let handlelogin=()=>{
    setAuth(true)
    navigate("/")
  }
  let handlelogout=()=>{
    setAuth(false)
    navigate('/login')
  }
  return <AuthContext.Provider value={{auth,setAuth,email,setEmail,password,setPassword,handlelogin,handlelogout}}>{children}</AuthContext.Provider>;
};