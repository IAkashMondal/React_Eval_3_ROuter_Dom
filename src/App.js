import "./App.css";
import {Routes,Route} from "react-router-dom"
import RequiredAuth from "./hoc/RequiredAuth"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
     
        <Routes>
        <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}></Route>
        <Route path="/login" element={<Login/>}> </Route>
        
       </Routes>
      
    </div>
  );
}

export default App;