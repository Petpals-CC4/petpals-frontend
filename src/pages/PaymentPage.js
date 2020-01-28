import React, { Component } from 'react'

import Payment from "../components/payment"
import GoBackButton from '../components/utils/GoBackButton'

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <GoBackButton />
        <Payment />
      </div>
    )
  }
}

export default PaymentPage
