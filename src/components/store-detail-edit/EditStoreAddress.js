import React, { Component } from "react";

import { Row, Col, Typography, Button, message } from "antd";
import Axios from "../../utils/api.service";

import CardStoreAddress from "./edit-store-address/CardStoreAddress";
import AddStoreAddressDrawer from "./edit-store-address/AddStoreAddressDrawer";
class EditStoreAddress extends Component {
  state = {
    addressLists: [],
    drawerAddVisible: false
  };

  handleOpenDrawer = drawer_name => e => {
    this.setState({
      [drawer_name]: true
    });
  };

  handleCloseDrawer = drawer_name => e => {
    this.setState({
      [drawer_name]: false
    });
  };

  createAddress = async obj => {
    try {
      let result = await Axios.post(`/address`, obj);
      console.log(result.data);
      message.success("เพิ่มที่อยู่สำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถเพิ่มที่อยู่ได้");
    }

    this.getAddress();
    this.handleCloseDrawer("drawerAddVisible")();
  };

  getAddress = async () => {
    let result = await Axios.get(`/address`);
    // console.log(result.data);
    this.setState({
      addressLists: result ? result.data : []
    });
  };

  componentDidMount = () => {
    this.getAddress();
  };

  render() {
    const { addressLists } = this.state;
    return (
      <div style={{ margin: "2em" }}>
        <Typography.Title
          level={3}
          style={{
            color: "#0F4C81",
            textAlign: "center"
          }}
        >
          ที่อยู่พี่เลี้ยง
        </Typography.Title>
        <Button
          block
          type="primary"
          onClick={this.handleOpenDrawer("drawerAddVisible")}
          style={{ margin: "1em 0px" }}
        >
          เพิ่มที่อยู่
        </Button>

        <Row type="flex" gutter={[16, 16]}>
          {addressLists
            ? addressLists.map(addressLists => (
              <Col key={addressLists.id} xs={24} sm={12} md={8} xl={4}>
                <CardStoreAddress
                  address_id={addressLists.id}
                  house_no={addressLists.house_no}
                  road={addressLists.road}
                  sub_district={addressLists.sub_district}
                  district={addressLists.district}
                  province={addressLists.province}
                  post_code={addressLists.post_code}
                  refreshAddress={this.getAddress}
                />
              </Col>
            ))
            : ""}
        </Row>

        <AddStoreAddressDrawer
          visible={this.state.drawerAddVisible}
          handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
          handleClickSave={this.createAddress}
        />
      </div>
    );
  }
}

export default EditStoreAddress;