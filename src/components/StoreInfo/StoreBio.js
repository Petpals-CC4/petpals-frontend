import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";

// ------------------------image------------------------------

import avatar from "../StoreInfo/avatar.png";

export class StoreBio extends Component {
  state = {
    data: {
      Store_Name: "Haleluya",
      Store_Description: "ผู้เชี่ยวชาญด้านการดูแลน้องหมากว่า 4 ปี"
    }
  };

  render() {
    return (
      <Layout>
        <Card>
          <Row>
            <Col>
              <Row>
                <h1>{this.state.data.Store_Name}</h1>
              </Row>
              <Row>
                <p>{this.state.data.Store_Description}</p>
              </Row>
            </Col>
            <Col>
              <img
                src={avatar}
                alt="avatar"
                style={{ width: "30px", height: "30px" }}
              />
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default StoreBio;
