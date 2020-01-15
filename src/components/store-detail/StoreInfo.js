import React, { Component } from "react";
import StoreMaps from "./store-info/StoreMaps";
import StoreBio from "./store-info/StoreBio";
import StoreServices from "./store-info/StoreServices";
import StoreReviews from "./store-info/StoreReviews";

class StoreInfo extends Component {
  render() {
    return (
      <>
        <StoreBio />
        <StoreServices />
        <StoreMaps />
        <StoreReviews/>
      </>
    );
  }
}

export default StoreInfo;
