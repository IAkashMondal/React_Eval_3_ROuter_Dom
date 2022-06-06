import React,{useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const RequiredAuth = ({ children }) => {
  const{auth}=useContext(AuthContext)
  if(auth)
  {
    return children;
  }
  else{
   return(
    <Navigate to="/login" ></Navigate>
   ) 
  }
};
export default RequiredAuth;