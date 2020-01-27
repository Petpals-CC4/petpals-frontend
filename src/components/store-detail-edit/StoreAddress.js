import React, { Component } from "react";
import AddressStore from "./store-adress/AddressStore";
import { Row, Col, Card, Typography } from "antd";

class StoreAddress extends Component {
  state = {
    storeAddress: [
      {
        store_id: 1,
        house_no: "604/3",
        village_no: "",
        road: "เพชรบุรี",
        sub_district: "ถนนเพชรบุรี",
        district: "เขตราชเทวี",
        province: "กรุงเทพมหานคร",
        post_code: "10400",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  };

  handleaddress = () => {
    return this.state.storeAddress.map(x => (
      <Card>
        <Row>
          <Col>
            <p>
              {x.house_no} ถนน{x.road}
            </p>
            <p>
              เเขวง{x.sub_district} เขต{x.district}
            </p>
            <p>{x.province}</p>
            <p>{x.post_code}</p>
          </Col>
        </Row>
      </Card>
    ));
  };

  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        gutter={[16, 16]}
        style={{ marginTop: "10px" }}
      >
        <Col span={24}>
          <Typography.Title
            level={4}
            className="textCenter"
            style={{ color: "#0F4C81" }}
          >
            ที่อยู่พี่เลี้ยง
          </Typography.Title>
        </Col>
        <Col span={24}>{this.handleaddress()}</Col>
      </Row>
    );
  }
}

export default StoreAddress;
