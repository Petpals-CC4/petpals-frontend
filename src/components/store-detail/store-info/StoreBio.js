import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";

// ------------------------image------------------------------

export class StoreBio extends Component {
  state = {
    store: {
      store_Name: "Haleluya",
      store_Description: "ผู้เชี่ยวชาญด้านการดูแลน้องหมากว่า 4 ปี",
      image_url: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/09/28/70b04c7a-ddc7-11e9-94c8-f27aa1da2f45_image_hires_132637.jpg"
    }
  };

  render() {
    return (
      <Layout>
        <Card>
          <Row>
            <Col>
              <Row>
                <h1>{this.state.store.store_Name}</h1>
              </Row>
              <Row>
                <p>{this.state.store.store_Description}</p>
              </Row>
            </Col>
            <Col>
              <img
                src={this.state.store.image_url}
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
