import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";

// ------------------------Icon------------------------------

import boneEmptyIcon from "../../../../images/boneicon3.png";

// ---------------------Component--------------------------

import StoreUserComment from "./StoreUserComment";

export class StoreReviews extends Component {
  render() {
    return (
      <Layout>
        <Card>
          <Row
            gutter={[8, 8]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={2} type="flex" justify="start">
              <h1 style={{color:"#1DE1EE"}} >รีวิว</h1>
            </Col>
            <Col span={2} offset={6} type="flex" justify="end">
              <img
                src={boneEmptyIcon}
                style={{ width: "30px", height: "30px" }}
              />
              <h3 style={{color:"#1DE1EE"}}> 3.5 </h3>
            </Col>
          </Row>
        </Card>
        <Row>
          <StoreUserComment />
        </Row>
      </Layout>
    );
  }
}

export default StoreReviews;
