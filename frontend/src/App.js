import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import men_banner from "./components/Assets/banner_mens.png";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./components/Footer/Footer";

import kid_banner from "./components/Assets/banner_kids.png";
import women_banner from "./components/Assets/banner_women.png";
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
         <Route path='/womens' element={<ShopCategory banner={women_banner}  category="women"/>}/>
         <Route path='kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
         <Route path="/product" element={<Product/>}>
         <Route path=":productId" element={<Product/>}/>

         </Route>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/login" element={<LoginSignUp/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
