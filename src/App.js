<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import StoreDetailPage from "./pages/StoreDetailPage";
// import LandingPage from './components/LandingPage/LandingPage';
// import Navbar from './components/landing/Navbar'
// import PaymentPage from "./pages/PaymentPage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <PaymentPage /> */}
        {/* <VerifyPaymentPage /> */}
        {/* <CarouselSlider /> */}
        <StoreDetailPage/>
      </div>
    );
  }
=======
import React from 'react';
import './App.css';
//import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/LandingPage/Navbar'
import StoreInfo from "./components/store-detail/StoreInfo";
import PaymentPage from "./pages/PaymentPage";
import CarouselSlider from './components/CarouselSlider';
import VerifyPaymentPage from './components/VerifyPaymentPage';


function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <StoreInfo /> */}
      {/* <PaymentPage /> */}
      <VerifyPaymentPage />
      {/* <CarouselSlider /> */}
    </div>
  );
>>>>>>> feature/Pon_VelifyPayment
}

export default App;
