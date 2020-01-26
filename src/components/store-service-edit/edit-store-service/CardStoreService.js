import React, { Component } from 'react'
import { Button, Card, Drawer, Modal, message, Typography, Row, Col } from 'antd'

import EditStoreServiceDrawer from "./EditStoreServiceDrawer"
import Axios from '../../../utils/api.service'
import { withCommas } from '../../../utils'

const { confirm } = Modal;

export class CardStoreService extends Component {
  state = {
    drawerVisible: false,
    drawerEditVisible: false
  };

  showUpdateConfirm = obj => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะแก้ไขบริการนี้ใช่หรือไม่?",
      okText: "ยืนยัน",
      okType: "success",
      cancelText: "ยกเลิก",
      onOk() {
        me.updateService(obj);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  updateService = async obj => {
    // console.log(obj);
    try {
      let result = await Axios.put(`/service/${obj.service_id}`, obj);
      console.log(result.data);
      message.success("แก้ไขรายการสำเร็จ")
    } catch (error) {
      message.error("ไม่สามารถแก้ไขรายการได้")
    }

    this.props.refreshService();
    this.handleClickClose("drawerEditVisible")()
  };

  showDeleteConfirm = (id) => () => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะลบบริการนี้ใช่หรือไม่?",
      okText: "ใช่ ฉันจะลบ",
      okType: "danger",
      cancelText: "ยกเลิก",
      onOk() {
        me.deleteService(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  deleteService = async id => {
    try {
      let result = await Axios.delete(`/service/${id}`);
      console.log(result.data);
      message.success("ลบรายการสำเร็จ")
    } catch (error) {
      message.error("ไม่สามารถลบรายการได้")
    }
    this.props.refreshService();
  };

  handleClick = (drawer_name) => (e) => {
    this.setState({
      [drawer_name]: true
    })
  }
  handleClickClose = (drawer_name) => (e) => {
    this.setState({
      [drawer_name]: false
    })
  }

  render() {
    const {
      service_id,
      service_name,
      service_description,
      service_price,
    } = this.props
    return (
      <Card
        key={service_id}
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
        {/* {`#${service_id}`} */}
        <Row type="flex" justify="space-between" style={{ flexDirection: "column", height: "100%" }}>
          <Col span={24}>
            <Typography.Title level={4} ellipsis>{service_name}</Typography.Title>
            <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>รายละเอียด:</span>
            <Typography.Paragraph ellipsis={{ rows: 3 }}>
              {service_description}
            </Typography.Paragraph>
            <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>ราคา:</span>
            <Typography.Paragraph>{withCommas(service_price)} บาท</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Button.Group style={{ display: "flex" }}>
              <Button
                type="dashed"
                style={{ flex: 1 }}
                onClick={this.handleClick("drawerEditVisible")}
              >
                แก้ไขบริการ
              </Button>
              <Button
                type="danger"
                icon="delete"
                ghost
                onClick={this.showDeleteConfirm(service_id)}
              />
            </Button.Group>
          </Col>
        </Row>

        <EditStoreServiceDrawer
          visible={this.state.drawerEditVisible}
          serviceDetail={
            {
              service_id,
              service_name,
              service_description,
              service_price
            }
          }
          handleCloseDrawer={this.handleClickClose("drawerEditVisible")}
          handleClickSave={this.showUpdateConfirm}
        />
      </Card>
    )
  }
}

export default CardStoreService
