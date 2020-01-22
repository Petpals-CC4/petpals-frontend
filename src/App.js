import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css';

import NotFound from './components/utils/NotFound'

import LandingPage from './pages/LandingPage';
import StoreDetailPage from "./pages/StoreDetailPage";
import PaymentPage from "./pages/PaymentPage";
import VerifyPaymentPage from './pages/VerifyPaymentPage';
import ShopDetailEditPage from './pages/ShopDetailEditPage';

import AuthPage from './pages/AuthPage';

class App extends Component {
  render() {
    window.appHistory = this.props.history
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/store_detail/:id" component={StoreDetailPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/verifypaymentpage" component={VerifyPaymentPage} />
          <Route path="/shopdetaileditpage/:id"component={ShopDetailEditPage}/>
          {/* <Route path="/main" component={MainLayout} /> */}
          {/* <Route path="/signin" component={FirstPage} /> */}
          {/* <Route path="/signup" component={FirstPage} /> */}
          <Route path="/verify_payment" component={VerifyPaymentPage} />
          <Route path="/signin" component={AuthPage} />
          <Route path="/signup" component={AuthPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)