import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";

// -----------------------------------------Image-----------------------------------

import phoneIcon from "../../../images/phoneIcon.png";
import googleMap from "../../../images/googlemap.png";

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
            gutter={[2, 8]}
            type="flex"
            align="middle"
          >
            <Col span={4}>
              <h4 style={{color:"#1DE1EE"}}>Address: {this.state.data.Address}</h4>
            </Col>
            <Col span={4}>
              <div>
                <img
                  src={phoneIcon}
                  alt="phoneIcon"
                  style={{ width: "15px", height: "15px" }}
                />
                &nbsp;<h4 style={{color:"#1DE1EE"}}>{this.state.data.User_Phone}</h4>
              </div>
            </Col>
          </Row>
          <Row type="flex"align="middle" s>
            <img
              src={googleMap}
              alt="googleMap"
              style={{ width: "80%", height: "10%" }}
            />
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default StoreMaps;
