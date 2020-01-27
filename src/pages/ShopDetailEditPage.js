import React, { Component } from 'react'
import { Layout } from 'antd';
import { Row,Col } from 'antd';
import { Button } from 'antd';
import EditStoreBio from '../components/store-bio-edit/EditStoreBio';

import EditStoreService from "../components/store-service-edit/EditStoreService"

class ShopDetailEditPage extends Component {
  render() {
    return (
      <div >
          <Layout className="fullMinHeight">
            <EditStoreBio />
            <EditStoreService />
      </Layout>
      </div>
    )
  }
}

export default ShopDetailEditPage;
