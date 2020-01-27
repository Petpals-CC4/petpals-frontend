import React, { Component } from "react";
import { Col, Card, Row, Button, Modal, Drawer } from "antd";
import axios from "../../../utils/api.service";
import EditStoreBank from "./EditStoreBankDrawer";

const { confirm } = Modal;

class ShowBank extends Component {
  state = {
    bankAccounts: [],
    drawerEditVisible: false
  };

  showEditDrawer = () => {
    this.setState({
      drawerEditVisible: true
    });
  };
  onEditDrawerclose = () => {
    this.setState({
      drawerEditVisible: false
    });
  };

  showUpdateConfirm = obj => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะแก้ไขบัญชีธนาคารนี้ใช่หรือไม่?",
      okText: "ใช่",
      okType: "success",
      cancelText: "ไม่",
      onOk() {
        me.updateBank(obj);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  updateBank = async obj => {
    console.log(obj);
    let result = await axios.put(`/bank/${obj.bank_id}`, obj);
    console.log(result.data);
    this.getBank();
    this.onEditDrawerclose();
  };

  showDeleteConfirm = id => () => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะลบบัญชีธนาคารนี้ใช่หรือไม่?",
      okText: "ใช่",
      okType: "danger",
      cancelText: "ไม่",
      onOk() {
        me.deleteBank(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  deleteBank = async id => {
    let result = await axios.delete(`/bank/${id}`, {
      data: {
        store_id: "1"
      }
    });
    console.log(result.data);
    this.getBank();
  };



  render() {
    const { bankAccounts } = this.state;
    return (
      <Row type="flex" justify="space-around" align="middle" gutter={[8, 8]}>

        <Card
          size="default"
          key={bankAccount.id}
          style={{
            width: "100%",
            marginBottom: "10px",
            marginRight: "5px",
            marginLeft: "5px",
            borderRadius: "12px"
          }}
        >
          <Row
            gutter={[16, 16]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={24}>
              <h3>{bankAccount.bank_name}</h3>
            </Col>
            <Col span={24}>
              <p>{bankAccount.account_name}</p>
            </Col>
            <Col span={24}>
              <p>{bankAccount.account_number}</p>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Button
                onClick={this.showDeleteConfirm(bankAccount.id)}
                type="dashed"
                block
                style={{ color: "#cc0a0a", marginRight: "20px" }}
              >
                ลบบัญชีธนาคาร
                      </Button>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                block
                onClick={this.showEditDrawer}
              >
                แก้ไขบัญชีธนาคาร
                      </Button>
            </Col>
          </Row>
        </Card>

        <Drawer
          placement="right"
          width="400px"
          closable={false}
          onClose={this.onEditDrawerclose}
          visible={this.state.drawerEditVisible}
          title="แก้ไขบัญชี"
        >
          <EditStoreBank showUpdateConfirm={this.showUpdateConfirm} />
        </Drawer>
      </Row>
    );
  }
}

export default ShowBank;
