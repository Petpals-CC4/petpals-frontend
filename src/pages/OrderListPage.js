import React, { Component } from 'react'
import GoBackButton from '../components/utils/GoBackButton'
import DashboardUser from '../components/order-list-user/DashboardUser'

export class OrderListPage extends Component {
  render() {
    return (
      <div>
        <GoBackButton />
        <DashboardUser />
      </div>
    )
  }
}

export default OrderListPage
