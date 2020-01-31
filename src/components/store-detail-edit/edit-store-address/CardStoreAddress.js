import React, { Component } from "react";
import { Button, Card, Modal, message, Typography, Row, Col } from "antd";
import Axios from "../../../utils/api.service";

import EditStoreAddressDrawer from "./EditStoreAddressDrawer";

const { confirm } = Modal;

class CardStoreAddress extends Component {
  state = {
    drawerVisible: false,
    drawerEditVisible: false
  };

  showUpdateConfirm = obj => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะแก้ไขที่อยู่นี้ใช่หรือไม่?",
      okText: "ยืนยัน",
      okType: "success",
      cancelText: "ยกเลิก",
      onOk() {
        me.updateAddress(obj);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  updateAddress = async obj => {
    // console.log(obj);
    try {
      let result = await Axios.put(`/address/${obj.address_id}`, obj);
      console.log(result.data);
      message.success("แก้ไขรายการสำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถแก้ไขรายการได้");
    }

    this.props.refreshAddress();
    this.handleClickClose("drawerEditVisible")();
  };

  showDeleteConfirm = id => () => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะลบที่อยู่นี้ใช่หรือไม่?",
      okText: "ใช่ ฉันจะลบ",
      okType: "danger",
      cancelText: "ยกเลิก",
      onOk() {
        me.deleteAddress(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  deleteAddress = async id => {
    try {
      let result = await Axios.delete(`/address/${id}`);
      console.log(result.data);
      message.success("ลบรายการสำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถลบรายการได้");
    }
    this.props.refreshAddress();
  };

  handleClick = drawer_name => e => {
    this.setState({
      [drawer_name]: true
    });
  };
  handleClickClose = drawer_name => e => {
    this.setState({
      [drawer_name]: false
    });
  };

  render() {
    const {
      address_id,
      house_no,
      road,
      sub_district,
      district,
      province,
      post_code
    } = this.props;
    return (
      <Card
        key={address_id}
        hoverable
        style={{
          width: "100%",
          borderRadius: "12px",
          height: "100%"
        }}
        bodyStyle={{
          height: "100%"
        }}
      >
        <Row
          type="flex"
          justify="space-between"
          style={{ flexDirection: "column", height: "100%" }}
        >
          <Col span={24}>
            <Typography.Paragraph ellipsis>
              {house_no} ถนน{road}
            </Typography.Paragraph>
            <Typography.Paragraph ellipsis>
              แขวง/ตำบล{sub_district} เขต/อำเภอ{district}
            </Typography.Paragraph>
            <Typography.Paragraph ellipsis>
              {province} {post_code}
            </Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Button.Group style={{ display: "flex" }}>
              <Button
                type="dashed"
                style={{ flex: 1 }}
                onClick={this.handleClick("drawerEditVisible")}
              >
                แก้ไขที่อยู่
              </Button>
              <Button
                type="danger"
                icon="delete"
                ghost
                onClick={this.showDeleteConfirm(address_id)}
              />
            </Button.Group>
          </Col>
        </Row>

        <EditStoreAddressDrawer
          visible={this.state.drawerEditVisible}
          addressDetail={{
            address_id,
            house_no,
            road,
            sub_district,
            district,
            province,
            post_code
          }}
          handleCloseDrawer={this.handleClickClose("drawerEditVisible")}
          handleClickSave={this.showUpdateConfirm}
        />
      </Card>
    );
  }
}

export default CardStoreAddress;
