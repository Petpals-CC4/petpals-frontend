import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css';

import NotFound from './components/utils/NotFound'

import LandingPage from './pages/LandingPage';
// import SearchZone from './components/landing/SearchZone';
// import Navbar from './components/landing/Navbar'
import StoreDetailPage from "./pages/StoreDetailPage";
import PaymentPage from "./pages/PaymentPage";
// import CarouselSlider from './components/CarouselSlider';
import VerifyPaymentPage from './pages/VerifyPaymentPage';
import ShopDetailEditPage from './pages/ShopDetailEditPage';


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
          <Route path="/store_detail/:id" component={StoreDetailPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/verifypaymentpage" component={VerifyPaymentPage} />
          <Route path="/shopdetaileditpage/:id"component={ShopDetailEditPage}/>
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