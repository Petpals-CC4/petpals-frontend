import React, { Component } from "react";


import EditStoreService from "../components/store-service-edit/EditStoreService";
import StoreBank from "../components/store-detail-edit/StoreBank";
import FooterZone from "../components/landing/FooterZone";
import StoreAddress from "../components/store-detail-edit/StoreAddress";

class ShopDetailEditPage extends Component {
  render() {
    return (
      <>
        <StoreAddress />
        <EditStoreService />
        <StoreBank />
        <FooterZone />
      </>
    );
  }
}

export default ShopDetailEditPage;
