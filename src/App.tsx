import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ProductListing from "./page/ProductListing";
 import ProductDetail from "./page/ProductDetail";
 import SellerRegistration from "./page/SellerRegistration";
 import ShoppingCart from "./page/ShoppingCart";
import InquiryChat from "./page/InquiryChat";
import ContactSupport from "./page/ContactSupport";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
         <Route path="/product-listing" element={<ProductListing />} /> 
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/seller-registration" element={<SellerRegistration />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/inquiry-chat" element={<InquiryChat />} />
        <Route path="/contact-support" element={<ContactSupport />} /> 
      </Routes>
    </Router>
  );
}

export default App;