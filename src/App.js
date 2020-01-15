import React from "react";
import "./App.css";
//import LandingPage from './components/LandingPage/LandingPage';
import Navbar from "./components/LandingPage/Navbar";
import StoreInfo from "./components/store-detail/StoreInfo";
import PaymentPage from "./pages/PaymentPage";
import AffixServicePrice from "./components/store-detail/AffixServicePrice";
import StoreDetailPage from "./pages/StoreDetailPage";

function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <StoreDetailPage />
      {/* <PaymentPage /> */}
      {/* <VerifyPaymentPage /> */}
    </div>
  );
}

export default App;
