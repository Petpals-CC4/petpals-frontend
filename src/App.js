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
import StoreDetailEditPage from './pages/StoreDetailEditPage';
import AdminPage from './pages/AdminPage';
import AdminGuideTextPage from './pages/AdminGuideTextPage';
import DashboardPage from './pages/DashboardPage';
import OrderListPage from './pages/OrderListPage';

class App extends Component {
  render() {
    window.appHistory = this.props.history
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={AuthPage} />
          <Route path="/signup" component={AuthPage} />

          <Route path="/store_dashboard/" component={DashboardPage} />
          <Route path="/store_detail/edit" component={StoreDetailEditPage} />

          <Route exact path="/store_detail" component={StoreDetailPage} />
          <Route path="/store_detail/:store_id" component={StoreDetailPage} />

          <Route path="/order" component={OrderListPage} />
          <Route path="/feedback/:order_id" component={FeedbackPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/verify_payment/:order_id" component={VerifyPaymentPage} />

          <Route path="/guide_text/edit" component={AdminGuideTextPage} />
          <Route exact path="/admin" component={AdminPage} />

          <Route exact path="/not_found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)