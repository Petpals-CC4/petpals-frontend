import React, { Component } from "react";
import StoreBank from "../components/store-detail-edit/StoreBank";
import { Layout } from "antd";

class ShopDetailEditPage extends Component {

  render() {
    return (
      <Layout>
        <StoreBank />
      </Layout>
    );
  }
}

export default ShopDetailEditPage;
