import React, { Component } from 'react'

import VerifyPayment from '../components/verify-payment'
import GoBackButton from '../components/utils/GoBackButton'

export class VerifyPaymentPage extends Component {
  render() {
    return (
      <>
        <GoBackButton goTo="/order" />
        <VerifyPayment />
      </>
    )
  }
}

export default VerifyPaymentPage
