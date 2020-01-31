import React, { Component } from 'react'
import GoBackButton from '../components/utils/GoBackButton'
import OrderListsUser from '../components/order-list-user/OrderListsUser'

export class OrderListPage extends Component {
  render() {
    return (
      <div style={{ margin: "2em" }}>
        <GoBackButton goTo="/" />
        <OrderListsUser />
      </div>
    )
  }
}

export default OrderListPage
