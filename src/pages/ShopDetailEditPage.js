import React, { Component } from 'react'
import { Layout } from 'antd';

import EditStoreService from "../components/store-service-edit/EditStoreService"

class ShopDetailEditPage extends Component {
  render() {
    return (
      <Layout className="fullMinHeight">
        <EditStoreService />
      </Layout>
    )
  }
}

export default ShopDetailEditPage;
