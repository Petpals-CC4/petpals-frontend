import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css';

import NotFound from './components/utils/NotFound'

import LandingPage from './pages/LandingPage';
// import SearchZone from './components/landing/SearchZone';
// import Navbar from './components/landing/Navbar'
// import StoreInfo from "./components/store-detail/StoreInfo";
import PaymentPage from "./pages/PaymentPage";
// import CarouselSlider from './components/CarouselSlider';
// import VerifyPaymentPage from './components/VerifyPaymentPage';

class App extends Component {
  render() {
    window.appHistory = this.props.history
    return (
      <div>
        {/* <Navbar /> */}
        {/* <LandingPage /> */}
        {/* <StoreInfo /> */}
        {/* <PaymentPage /> */}
        {/* <VerifyPaymentPage /> */}
        {/* <CarouselSlider /> */}
        {/* <SearchZone /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/payment" component={PaymentPage} />
          {/* <Route path="/main" component={MainLayout} /> */}
          {/* <Route path="/signin" component={FirstPage} /> */}
          {/* <Route path="/signup" component={FirstPage} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)