import { Routes,Route,BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Animal from "./pages/Animal";
import Grocery from "./pages/Grocery";
import Cold from "./pages/Cold";
import Stationary from "./pages/Stationary";
import Vegetable from "./pages/Vegetable";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import GoogleSuccess from "./pages/GoogleSuccess";

 function App(){

  return(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
   <Route path="/register" element={<Register/>} />  
 <Route path ="/login" element={<Login/>}></Route>
 <Route path="/Animal" element={<Animal/>}></Route>
 <Route path="/Stationary" element={<Stationary/>}></Route>
 <Route path="/vegetable" element={<Vegetable/>}/>
 <Route path="/cold" element={<Cold/>}></Route>
 <Route path="/grocery" element={<Grocery/>}></Route>
 <Route path="/cart" element={<Cart/>}></Route>
 <Route path="/success"element={<Success/>}></Route>
 <Route path="/forgot-password"
 element={<ForgotPassword />}
                />

                <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                />

      <Route
    path="/google-success"
    element={<GoogleSuccess />}
/>          

 

      </Routes>
    
    
    
    </BrowserRouter>
   
  )
}
export default App;