import React, { Component } from "react";
import { Drawer, Button, Row, Col, Typography } from "antd";
import axios from "../../utils/api.service";

import { withRouter } from "react-router-dom";
import AddStoreBank from "./store-bank/AddStoreBankDrawer";
import ShowBank from "./store-bank/CardStoreBank";

class StoreBank extends Component {
  state = {
    bankAccounts: [],
    drawerVisible: false
  };

  showDrawer = () => {
    this.setState({
      drawerVisible: true
    });
  };
  onDrawerclose = () => {
    this.setState({
      drawerVisible: false
    });
  };

  getBank = async () => {
    let result = await axios.get(`/bank`);
    console.log(result.data);
    this.setState({
      bankAccounts: result ? result.data : []
    });
  };

  componentDidMount = () => {
    this.getBank();
  };

  render() {
    const { bankAccounts } = this.state;
    return (
      <div style={{ margin: "2em" }}>
        <Typography.Title
          level={3}
          style={{
            color: "#0F4C81",
            textAlign: "center"
          }}
        >
          รายการบัญชีธนาคารพี่เลี้ยง
        </Typography.Title>
        <Button
          type="primary"
          block
          onClick={this.showDrawer}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          เพิ่มบัญชีธนาคาร
        </Button>

        <Row type="flex" gutter={[16, 16]}>
          {bankAccounts
            ? bankAccounts.map(bankAccount => (
                <Col xs={24} sm={12} md={8} xl={4}>
                  <ShowBank
                    bank_id={bankAccounts.bank_id}
                    bank_name={bankAccount.bank_name}
                    account_name={bankAccount.account_name}
                    account_number={bankAccount.account_number}
                    refreshBank={this.refreshBank}
                  />
                </Col>
              ))
            : ""}
        </Row>

        <Drawer
          placement="right"
          width="400px"
          closable={false}
          onClose={this.onDrawerclose}
          visible={this.state.drawerVisible}
          title="เพิ่มบัญชี"
        >
          <AddStoreBank />
        </Drawer>
      </div>
    );
  }
}

export default withRouter(StoreBank);
