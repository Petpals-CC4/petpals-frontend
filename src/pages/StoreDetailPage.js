import React, { Component } from 'react'
import { Layout } from 'antd'
// ------------------------------Component--------------------------------------------
import AffixServicePrice from '../components/store-detail/AffixServicePrice'
import StoreInfo from '../components/store-detail/StoreInfo'

class StoreDetailPage extends Component {
  render() {
    return (
      <Layout>
        <AffixServicePrice/>
        <StoreInfo/>
      </Layout>
    )
  }
}

export default StoreDetailPage
