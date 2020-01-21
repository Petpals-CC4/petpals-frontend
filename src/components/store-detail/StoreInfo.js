import React, { Component } from "react";
import StoreMaps from "./store-info/StoreMaps";
import StoreBio from "./store-info/StoreBio";
import StoreServices from "./store-info/StoreServices";
import StoreReviews from "./store-info/StoreReviews";

class StoreInfo extends Component {
  render() {
    const {
      storeData,
      onChange,
      handleClickService,
      checkedServices,
    } = this.props;
    return (
      <>
        <StoreBio
          name={storeData.store_name}
          description={storeData.store_description}
          imageUrl={storeData.profile_image_url}
          />
        <StoreServices
          onChange={onChange}
          handleClickService={handleClickService}
          services={storeData.service}
          checkedServices={checkedServices}
        />
        <StoreMaps />
        <StoreReviews feedback_score={storeData.feedback_score} feedbacks={storeData.feedback} />
      </>
    );
  }
}

export default StoreInfo;
