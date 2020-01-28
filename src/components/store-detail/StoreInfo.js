import React, { Component } from "react";
import StoreMaps from "./store-info/StoreMaps";
import StoreBio from "./store-info/StoreBio";
import StoreServices from "./store-info/StoreServices";
import StoreReviews from "./store-info/StoreReviews";
import { Row, Col } from "antd";

class StoreInfo extends Component {
  render() {
    const {
      storeData,
      onChange,
      handleClickService,
      checkedServices
    } = this.props;
    const storeServices = storeData.service ? [...storeData.service].map(service => {
      return {
        ...service,
        store_id: storeData.id
      }
    }) : []
    return (
      <Row gutter={[16, 16]} style={{ paddingBottom: "40px" }}>
        <Col xs={24} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
          <StoreBio
            name={storeData.store_name}
            description={storeData.store_description}
            imageUrl={storeData.profile_image_url}
          />
        </Col>
        <Col xs={24} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
          <StoreServices
            onChange={onChange}
            handleClickService={handleClickService}
            services={storeServices}
            checkedServices={checkedServices}
          />
        </Col>
        <Col xs={24} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
          <StoreMaps />
        </Col>
        <Col xs={24} sm={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
          <StoreReviews
            feedback_score={storeData.feedback_score}
            feedbacks={storeData.feedback}
          />
        </Col>
      </Row>
    );
  }
}

export default StoreInfo;
