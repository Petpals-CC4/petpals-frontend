import React, { Component } from "react";
import StoreMaps from "./store-info/StoreMaps";
import StoreBio from "./store-info/StoreBio";
import StoreServices from "./store-info/StoreServices";
import StoreReviews from "./store-info/StoreReviews";

class StoreInfo extends Component {
  render() {
    const {
      onChange,
      handleClickService,
      service,
      checkedServices,
      total_price
    } = this.props;
    return (
      <>
        <StoreBio />
        <StoreServices
          onChange={onChange}
          handleClickService={handleClickService}
          service={service}
          checkedServices={checkedServices}
          total_price={total_price}
        />
        <StoreMaps />
        <StoreReviews />
      </>
    );
  }
}

export default StoreInfo;
