// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Footer from"./components/Footer";
import bannermens from "./ASSETS/frontend/assets/bannermens.png";
import bannerwomens from "./ASSETS/frontend/assets/bannerwomens.png";
import bannerkids from "./ASSETS/frontend/assets/bannerkids.png";
import "./input.css";
import "./output.css";

export default function  App (){
  return (
  <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category category="men" banner={bannermens} />} />
          <Route path="/womens" element={<Category category="women" banner={bannerwomens} />} />
         
          <Route path="/kids" element={<Category category="kid"banner={bannerkids}/>} />
          <Route path="/product" element={<Product />} >
          <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
         
        </Routes>
        <Footer />
      </BrowserRouter>
   </main>

  )
}

 