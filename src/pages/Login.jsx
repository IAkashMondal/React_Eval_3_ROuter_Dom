
import React, {  useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Login = () => {

  const {setPassword,setEmail,handlelogin}=useContext(AuthContext)
  return (
    <div>
    <h1> {`Eval 3`}</h1>
      <input onChange={(e)=>setEmail(e.target.value)} placeholder="a" data-cy="login-email" />
      <input onChange={(e)=>setPassword(e.target.value)} placeholder="a" type="password" data-cy="login-password" />
      <button onClick={handlelogin} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;