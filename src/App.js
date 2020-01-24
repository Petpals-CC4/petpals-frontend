import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css';

// import NotFound from './components/utils/NotFound'

// import LandingPage from './pages/LandingPage';
// import StoreDetailPage from "./pages/StoreDetailPage";
// import PaymentPage from "./pages/PaymentPage";
// import VerifyPaymentPage from './pages/VerifyPaymentPage';
// import AuthPage from './pages/AuthPage';
// import FeedbackPage from './pages/FeedbackPage'
import ShopDetailEditPage from './pages/ShopDetailEditPage'

class App extends Component {
  render() {
    window.appHistory = this.props.history
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" component={LandingPage} />
          <Route path="/store_detail/:id" component={StoreDetailPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/verify_payment" component={VerifyPaymentPage} />
          <Route path="/signin" component={AuthPage} />
          <Route path="/signup" component={AuthPage} />
          <Route path="/feedback" component={FeedbackPage} /> */}
          <Route path="/shopdetaileditpage" component={ShopDetailEditPage} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)