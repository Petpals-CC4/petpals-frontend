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
}

export default App











// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
