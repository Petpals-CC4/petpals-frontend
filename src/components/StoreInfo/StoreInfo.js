import React, { Component } from "react";
import StoreMaps from "./StoreMaps";
import StoreBio from "./StoreBio";
import StoreServices from "./StoreServices";

export class StoreInfo extends Component {
  render() {
    return (
      <>
        <StoreBio />
        <StoreServices />
        <StoreMaps />
      </>
    );
  }
}

export default StoreInfo;
