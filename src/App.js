import React from 'react';
import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Help from './components/Help';
import ContactUs from './components/Contactus';
import Addproducts from './components/Addproduct';
// import Product from './components/Product';
import PaymentOption from './components/PaymentOption';
import DeliveryForm from './components/DeliveryForm';
import Booking from './components/Booking';
import ProductInfo from './components/Productinfo';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/add-product" element = {<Addproducts/>} />
        <Route path="/paymentoption" element = {<PaymentOption/>} />
        <Route path="/deliveryfrom" element = {<DeliveryForm/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/booking" element={<Booking/>} />
        
        <Route path="/product-info/:productId"element={<ProductInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
