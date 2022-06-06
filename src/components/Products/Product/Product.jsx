import React,{useState,useContext,useEffect} from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({elem}) => {
  // Note: this id should come from api
  const deleteitem = (id)=>{
    
      fetch(`http://localhost:8080/cartItems/`+id,{
        method:"DELETE",
      
  }).then((r)=>(r.json()))
      .then((r)=>{
      alert("deleted This particlar cartItem")
      getdata();
    
      })
    

  }
  var   getdata = () => {
    fetch(`http://localhost:8080/cartItems/`
    ).then((r)=>(r.json()))
    .then((r)=>{
   
      setCartItem({r})
    })
  }
  let [cartitem,setCartItem]=useState({})
  // let deleteitem=(id)=>{
  //   setCartItem(data.filter((elem)=>(elem.id!==id)))
  
  useEffect(()=>{
 
      fetch(`http://localhost:8080/cartItems?productId=${elem.id}`)
    .then((r)=>(r.json()))
    .then((r)=>{
      setCartItem({r})
    })
    
  },[])
  const{addtocart}=useContext(CartContext)
  const product = { id: elem.id };
  return (
    <div style={{border:"1px solid black"}} data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{elem.name}</h3>
      <h6 data-cy="product-description">{elem.description}</h6>
      <button onClick={()=>addtocart(product.id)} data-cy="product-add-item-to-cart-button">add</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">1
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button onClick={()=>deleteitem(elem.id)} data-cy="product-remove-cart-item-button">Delete</button>
      </div>
    </div>
  );
};

export default Product;
