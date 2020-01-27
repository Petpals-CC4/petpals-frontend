import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "../../utils/api.service";

import { Button, Row, Col, Typography, message } from "antd";

import CardStoreBank from './store-bank/CardStoreBank';
import AddStoreBankDrawer from './store-bank/AddStoreBankDrawer';

class StoreBank extends Component {

  state = {
    bankLists: [],
    drawerAddVisible: false
  }

  handleOpenDrawer = (drawer_name) => (e) => {
    this.setState({
      [drawer_name]: true
    });
  };

  handleCloseDrawer = (drawer_name) => (e) => {
    this.setState({
      [drawer_name]: false
    });
  };

  createBank = async obj => {
    try {
      let result = await Axios.post(`/bank`, obj);
      console.log(result.data);
      message.success("เพิ่มรายการสำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถเพิ่มรายการได้");
    }

    this.getBank();
    this.handleCloseDrawer("drawerAddVisible")();
  };

  getBank = async () => {
    let result = await Axios.get(`/bank`);
    // console.log(result.data);
    this.setState({
      bankLists: result ? result.data : []
    });
  };

  componentDidMount = () => {
    this.getBank();
  };

  render() {
    const { bankLists } = this.state;
    return (
      <div style={{ margin: "2em" }}>
        <Typography.Title level={3}
          style={{
            color: "#0F4C81",
            textAlign: "center"
          }}
        >
          รายการบัญชีธนาคารพี่เลี้ยง
        </Typography.Title>
        <Button
          block
          type="primary"
          onClick={this.handleOpenDrawer("drawerAddVisible")}
          style={{ margin: "1em 0px" }}
        >
          เพิ่มบัญชีธนาคาร
        </Button>

        <Row
          type="flex"
          gutter={[16, 16]}
        >
          {bankLists
            ? bankLists.map(bankList => (
              <Col
                key={bankList.id}
                xs={24} sm={12} md={8} xl={4}
              >
                <CardStoreBank
                  bank_id={bankList.id}
                  bank_name={bankList.bank_name}
                  account_name={bankList.account_name}
                  account_number={bankList.account_number}
                  refreshBank={this.getBank}
                />
              </Col>
            ))
            : ""}
        </Row>

        <AddStoreBankDrawer
          visible={this.state.drawerAddVisible}
          handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
          handleClickSave={this.createBank}
        />
      </div>
    );
  }
}

export default withRouter(StoreBank);
