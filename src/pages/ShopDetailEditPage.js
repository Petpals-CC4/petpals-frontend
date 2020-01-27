<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component } from 'react'
import { Layout } from 'antd';
import { Row,Col } from 'antd';
import { Button } from 'antd';
import EditStoreBio from '../components/store-bio-edit/EditStoreBio';
>>>>>>> feature/film_DashBoard&&EdditSotreBio


import EditStoreService from "../components/store-service-edit/EditStoreService";
import StoreBank from "../components/store-detail-edit/StoreBank";
import FooterZone from "../components/landing/FooterZone";
import StoreAddress from "../components/store-detail-edit/StoreAddress";

class ShopDetailEditPage extends Component {
  render() {
    return (
<<<<<<< HEAD
      <>
        <StoreAddress />
        <EditStoreService />
        <StoreBank />
        <FooterZone />
      </>
    );
=======
      <div >
          <Layout className="fullMinHeight">
            <EditStoreBio />
            <EditStoreService />
      </Layout>
      </div>
    )
>>>>>>> feature/film_DashBoard&&EdditSotreBio
  }
}

export default ShopDetailEditPage;
