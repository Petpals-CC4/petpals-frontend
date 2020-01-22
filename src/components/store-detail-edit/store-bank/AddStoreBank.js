import React, { Component } from "react";
import { Layout, Button, Input, Row, Col } from "antd";

class AddStoreBank extends Component {
  render() {
    return (
      <Row type="flex" justify="space-around" align="middle" gutter={[24, 24]}>
        <Col span={24}>
          <Input placeholder="ธนาคาร"></Input>
        </Col>
        <Col span={24}>
          <Input placeholder="ชื่อเจ้าของบัญชี"></Input>
        </Col>
        <Col span={24}>
          <Input placeholder="เลขที่บัญชี"></Input>
        </Col>
        <Col span={24}>
          <Button block type="primary">
            เพิ่มบัญชี
          </Button>
        </Col>
      </Row>
    );
  }
}

export default AddStoreBank;
