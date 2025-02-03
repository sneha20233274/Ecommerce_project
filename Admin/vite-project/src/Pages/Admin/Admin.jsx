import React from 'react'
import { BrowserRouter } from "react-router-dom";
import './Admin.css'
// import Slidebar from "../../Components/Slidebar/Slidebar"
// import AddProduct from "../../Components/AddProduct/AddProduct";
// import ListProduct from "../../Components/ListProduct/ListProduct";
// import {Routes,Route}  from "react-router-dom"

const Admin = () => {
  return (
    <div className="admin">
        {/* <Slidebar/> */}
        <BrowserRouter>
    {/* <Route path="/" element={<AddProduct />} />

    <Route path="/addproduct" element={<AddProduct />} />
    <Route path="/listproduct" element={<ListProduct />} /> */}
    </BrowserRouter>
    </div>
  )
}

export default Admin
