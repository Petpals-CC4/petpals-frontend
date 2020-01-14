import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";

// -----------------------------------------Image-----------------------------------

import phoneIcon from "../StoreInfo/phoneIcon.png";
import googleMap from "../StoreInfo/googlemap.png";

export class StoreMaps extends Component {
  state = {
    data: {
      Address: "xx yyy cccc",
      User_Phone: "123495677"
    }
  };

  render() {
    return (
      <Layout>
        <Card>
          <Row
            gutter={[24, 16]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={18}>
              <h3>Address: {this.state.data.Address}</h3>
            </Col>
            <Col span={6}>
              <Row
                gutter={[8, 8]}
                type="flex"
                justify="space-around"
                align="middle"
              >
                <Col span={2}>
                  <img
                    src={phoneIcon}
                    alt="phoneIcon"
                    style={{ width: "15px", height: "15px" }}
                  />
                </Col>
                <Col span={6}>
                  <h3>{this.state.data.User_Phone}</h3>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify="space-around" align="middle"s>
            <img
              src={googleMap}
              alt="googleMap"
              style={{ width: "40%", height: "10%" }}
            />
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default StoreMaps;
