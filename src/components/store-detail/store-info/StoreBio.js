import React, { Component } from "react";
import { Layout, Col, Row, Card } from "antd";

// ------------------------image------------------------------

export class StoreBio extends Component {
  // state = {
  //   store: {
  //     store_Name: "Haleluya",
  //     store_Description: "ผู้เชี่ยวชาญด้านการดูแลน้องหมากว่า 4 ปี",
  //     image_url: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/09/28/70b04c7a-ddc7-11e9-94c8-f27aa1da2f45_image_hires_132637.jpg"
  //   }
  // }

  render() {
    const {
      name,
      description,
      imageUrl,
    } = this.props

    return (
      <Layout>
        <Card>
          <Row gutter={[8,8]}>
            <Col span= {18}>
              <Row>
                <h1 style={{color:"#0F4C81"}}>{name}</h1>
              </Row>
              <Row>
                <p style={{color:"#0F4C81"}}>{description}</p>
              </Row>
            </Col>
            <Col span={6}>
              <img
                src={imageUrl}
                style={{ width: "60px", height: "60px", borderRadius:'50%' }}
                alt="store_image"
              />
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default StoreBio;
