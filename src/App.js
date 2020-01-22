import React, { Component } from 'react'
import './App.css';
// import SearchZone from './components/landing/SearchZone';
// import LandingPage from './components/LandingPage/LandingPage';
// import Navbar from './components/landing/Navbar'
// import StoreInfo from "./components/store-detail/StoreInfo";
// import PaymentPage from "./pages/PaymentPage";
// import CarouselSlider from './components/CarouselSlider';
// import VerifyPaymentPage from './pages/VerifyPaymentPage';
import FeedbackPage from './pages/FeedbackPage'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <LandingPage /> */}
        {/* <StoreInfo /> */}
        {/* <PaymentPage /> */}
        {/* <VerifyPaymentPage /> */}
        <FeedbackPage />
        {/* <CarouselSlider /> */}
        {/* <SearchZone /> */}
      </div>
    )
  }
}

export default App