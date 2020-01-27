import React, { Component } from "react";
import AddressStore from "./store-adress/AddStoreAddress";
import { Row, Col, Card, Typography, Button, Drawer, Modal } from "antd";
import axios from "../../utils/api.service";

const { confirm } = Modal;
class StoreAddress extends Component {
  state = {
    storeAddress: [],
    DrawerAddAddresVisible: false
  };

  OnDrawerAddAddresVisibleclose = () => {
    this.setState({
      DrawerAddAddresVisible: false
    });
  };

  SetDrawerAddAddresVisible = () => {
    this.setState({
      DrawerAddAddresVisible: false
    });
  };

  showDeleteConfirm = id => () => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะลบที่อยู่นี้ใช่หรือไม่?",
      okText: "ใช่",
      okType: "danger",
      cancelText: "ไม่",
      onOk() {
        me.deleteAddress(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  deleteAddress = async id => {
    let result = await axios.delete(`/address/${id}`, {
      data: {
        store_id: "1"
      }
    });
    console.log(result.data);
    this.getAddress();
  };

  getAddress = async () => {
    let result = await axios.get(`/address`);
    console.log(result.data);
    this.setState({
      storeAddress: result ? result.data : []
    });
  };

  handleaddress = () => {
    return this.state.storeAddress.map(x => (
      <Card>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <p>
              {x.house_no} ถนน{x.road}
            </p>
            <p>
              เเขวง{x.sub_district} เขต{x.district}
            </p>
            <p>{x.province}</p>
            <p>{x.post_code}</p>
          </Col>
          <Col span={24}>
            <Button>แก้ไขที่อยู่</Button>
            <Button
              onClick={this.showDeleteConfirm()}
              type="dashed"
              block
              style={{ color: "#cc0a0a", marginRight: "20px" }}
            >
              ลบที่อยู่
            </Button>
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
          <Col span={24}>
            <Button type="primary">เพิ่มที่อยู่ร้าน</Button>
          </Col>
        </Col>
        <Col xs={24} xl={8}>
          {this.handleaddress()}
        </Col>

        <Drawer>
          <AddressStore />
        </Drawer>
      </Row>
    );
  }
}

export default StoreAddress;
