import React, { Component } from "react";
import { Layout, Drawer, Card, Button, Row, Col } from "antd";

import AddStoreBank from "./store-bank/AddStoreBank";

class StoreBank extends Component {
  state = {
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
  render() {
    const { bankAccounts } = this.props;

    return (
      <Layout>
        <Row>
          <Col>
            <Row type="flex" justify="space-around" align="middle">
              <h1
                style={{
                  fontSize: "30px",
                  color: "#0F4C81",
                  fontWeight: "900"
                }}
              >
                รายการบัญชีธนาคารพี่เลี้ยง
              </h1>
              <Button type="primary" onClick={this.showDrawer}>
                เพิ่มบัญชีธนาคาร
              </Button>
            </Row>
            <Row>
              <Col>
                {bankAccounts
                  ? bankAccounts.map(bankAccount => (
                      <Card key={bankAccount.id} style={{ width: "90hv" }}>
                        <h3>{bankAccount.bank_name}</h3>
                        <p>{bankAccount.account_name}</p>
                        <p>{bankAccount.account_number}</p>
                      </Card>
                    ))
                  : ""}
              </Col>
            </Row>
          </Col>
        </Row>

        <Drawer
          placement="right"
          width="400px"
          closable={false}
          onClose={this.onDrawerclose}
          visible={this.state.drawerVisible}
        >
          <AddStoreBank />
        </Drawer>
      </Layout>
    );
  }
}

export default StoreBank;
