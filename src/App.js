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
import AdminPage from './pages/AdminPage';

import AuthPage from './pages/AuthPage';
import FeedbackPage from './pages/FeedbackPage'
import DashboardPage from './pages/DashboardPage';
import AdminGuideText from './components/admin/AdminGuideText'

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
          <Route path="/dashboard_nanny" component={DashboardPage} />
          <Route path="/verify_payment" component={VerifyPaymentPage} />
          <Route path="/editguidetext" component={AdminGuideText} />
          <Route exact path="/adminpage" component={AdminPage} />
          <Route exact path="/not_found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)