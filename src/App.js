import React, { Component } from "react";
import "./App.css";
import StoreDetailPage from "./pages/StoreDetailPage";
// import LandingPage from './components/LandingPage/LandingPage';
// import Navbar from './components/landing/Navbar'
// import PaymentPage from "./pages/PaymentPage";

<<<<<<< HEAD

function App() {
  return (
    <div>
         <Navbar></Navbar> 
      {/* <StoreInfo /> */}
      {/* <PaymentPage /> */}
      {/* <VerifyPaymentPage /> */}
      {/* <CarouselSlider /> */}
    </div>
  );
=======
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
>>>>>>> develop
}

export default App;
