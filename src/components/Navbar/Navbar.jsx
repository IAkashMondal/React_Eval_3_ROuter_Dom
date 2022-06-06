
import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


const Navbar = () => {
  const {auth,handlelogout}=useContext(AuthContext)
  const {cart,setCart}=useContext(CartContext)
  React.useEffect(()=>{
    fetch(`http://localhost:8080/cartItems`)
    .then((r)=>(r.json()))
    .then((r)=>{
      setCart(r)
    })
  },[])
  return (
    <div style={{display:"flex",justifyContent:"end"}} data-cy="navbar">
      <Link to="/login" data-cy="navbar-home-link">HomePage</Link>
      <span data-cy="navbar-cart-items-count">Cart:({cart.length})</span>
      <button onClick={handlelogout} data-cy="navbar-login-logout-button">
        {auth ? "Logout":<Link to="/login">Login</Link>}</button>
    </div>
  );
};

export default Navbar;
