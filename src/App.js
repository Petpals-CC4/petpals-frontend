import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css';

import NotFound from './components/utils/NotFound'

import AuthPage from './pages/AuthPage';
import LandingPage from './pages/LandingPage';
import FeedbackPage from './pages/FeedbackPage'
import PaymentPage from "./pages/PaymentPage";
import VerifyPaymentPage from './pages/VerifyPaymentPage';
import StoreDetailPage from "./pages/StoreDetailPage";
import ShopDetailEditPage from './pages/ShopDetailEditPage';
import DashboardPage from './components/DashboardNanny/DashboardPage'

class App extends Component {
  render() {
    window.appHistory = this.props.history
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={AuthPage} />
          <Route path="/signup" component={AuthPage} />
          <Route path="/store_detail/edit" component={ShopDetailEditPage} />
          <Route exact path="/store_detail" component={StoreDetailPage} />
          <Route path="/store_detail/:store_id" component={StoreDetailPage} />
          <Route path="/feedback" component={FeedbackPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/dashboard_nanny/" component= {DashboardPage} />
          <Route path="/verifypaymentpage" component={VerifyPaymentPage} />
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