
import React,{useState,useEffect} from "react";
import Product from "./Product/Product";
import Navbar from "../Navbar/Navbar.jsx";
const Products = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:8080/products")
    .then((r)=>(r.json()))
    .then((r)=>{
      setData(r)
    })
  },[])

  return(
    <>
    <Navbar/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.map((elem)=>(
          <Product elem={elem}/>
        ))}
    </div>
    </>
    
  ) 
  
  
};

export default Products;