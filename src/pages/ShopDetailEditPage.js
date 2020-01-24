import React, { Component } from 'react'
import { Layout } from 'antd';

// import StoreDetailPage from "../pages/StoreDetailPage"
import EditStoreService from "../components/store-service-edit/EditStoreService"


class ShopDetailEditPage extends Component {

  render() {
    return (
      <Layout>
        {/* <StoreDetailPage /> */}
        <EditStoreService />
      </Layout>
    )
  }
}

export default ShopDetailEditPage;
