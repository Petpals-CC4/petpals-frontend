import React, { Component } from "react";
import StoreMaps from "./StoreMaps";
import StoreBio from "./StoreBio";
import StoreServices from "./StoreServices";
import StoreReviews from "./StoreReviews/StoreReviews";

export class StoreInfo extends Component {
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
