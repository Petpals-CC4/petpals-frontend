import React, { Component } from 'react'
import { Button, Card, Modal, message, Typography, Row, Col } from 'antd'

import EditStoreBankDrawer from "./EditStoreBankDrawer"
import Axios from '../../../utils/api.service'
// import { withCommas } from '../../../utils'

const { confirm } = Modal;

class CardStoreBank extends Component {
  state = {
    drawerVisible: false,
    drawerEditVisible: false
  };

  showUpdateConfirm = obj => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะแก้ไขบัญชีธนาคารนี้ใช่หรือไม่?",
      okText: "ยืนยัน",
      okType: "success",
      cancelText: "ยกเลิก",
      onOk() {
        me.updateBank(obj);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  updateBank = async obj => {
    // console.log(obj);
    try {
      let result = await Axios.put(`/bank/${obj.bank_id}`, obj);
      console.log(result.data);
      message.success("แก้ไขรายการสำเร็จ")
    } catch (error) {
      message.error("ไม่สามารถแก้ไขรายการได้")
    }

    this.props.refreshBank();
    this.handleClickClose("drawerEditVisible")()
  };

  showDeleteConfirm = (id) => () => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะลบบัญชีธนาคารนี้ใช่หรือไม่?",
      okText: "ใช่ ฉันจะลบ",
      okType: "danger",
      cancelText: "ยกเลิก",
      onOk() {
        me.deleteBank(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  deleteBank = async id => {
    try {
      let result = await Axios.delete(`/bank/${id}`);
      console.log(result.data);
      message.success("ลบรายการสำเร็จ")
    } catch (error) {
      message.error("ไม่สามารถลบรายการได้")
    }
    this.props.refreshBank();
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
      bank_id,
      bank_name,
      account_name,
      account_number,
    } = this.props
    return (
      <Card
        key={bank_id}
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
        {/* {`#${bank_id}`} */}
        <Row type="flex" justify="space-between" style={{ flexDirection: "column", height: "100%" }}>
          <Col span={24}>
            <Typography.Title level={4} ellipsis>{bank_name}</Typography.Title>
            <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>ชื่อบัญชี:</span>
            <Typography.Paragraph ellipsis={{ rows: 3 }}>
              {account_name}
            </Typography.Paragraph>
            <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>เลขที่บัญชี:</span>
            <Typography.Paragraph>{account_number}</Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Button.Group style={{ display: "flex" }}>
              <Button
                type="dashed"
                style={{ flex: 1 }}
                onClick={this.handleClick("drawerEditVisible")}
              >
                แก้ไขบัญชี
              </Button>
              <Button
                type="danger"
                icon="delete"
                ghost
                onClick={this.showDeleteConfirm(bank_id)}
              />
            </Button.Group>
          </Col>
        </Row>

        <EditStoreBankDrawer
          visible={this.state.drawerEditVisible}
          bankDetail={
            {
              bank_id,
              bank_name,
              account_name,
              account_number
            }
          }
          handleCloseDrawer={this.handleClickClose("drawerEditVisible")}
          handleClickSave={this.showUpdateConfirm}
        />
      </Card>
    );
  }
}

export default CardStoreBank;
