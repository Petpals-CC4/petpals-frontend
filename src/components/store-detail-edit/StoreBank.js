import React, { Component } from "react";
import { Layout, Drawer, Card, Button, Row, Col, Modal } from "antd";

import AddStoreBank from "./store-bank/AddStoreBank";

const { confirm } = Modal;
class StoreBank extends Component {
  state = {
    drawerVisible: false,
    drawerEditVisible: false
  };

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let result = await axios.put(`/bank/:id`, {
          bank_name: values.bank_name,
          account_name: values.account_name,
          account_number: values.account_number,
          store_id: values.store_id
        });
        console.log(result.data);
        console.log("Received values of form: ", values);
      }
    });
  };

  showDeleteConfirm = () => {
    confirm({
      title: "คุณยืนยันจะลบบัญชีธนาคารนี้ใช่หรือไม่?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
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
              <Button type="primary" block onClick={this.showDrawer}>
                เพิ่มบัญชีธนาคาร
              </Button>
            </Row>
            <Row>
              <Col>
                {bankAccounts
                  ? bankAccounts.map(bankAccount => (
                      <Card key={bankAccount.id} style={{ width: "90hv" }}>
                        <Row gutter={[16, 16]}>
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
                          <Col span={12}>
                            <Button
                              onClick={this.showDeleteConfirm}
                              type="dashed"
                              style={{ color: "#cc0a0a", marginRight: "20px" }}
                            >
                              ลบบัญชีธนาคาร
                            </Button>
                            <Button type="primary" onClick={this.showEditDrawer}>แก้ไขบัญชีธนาคาร</Button>
                          </Col>
                        </Row>
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

        <Drawer
          placement="right"
          width="400px"
          closable={false}
          onClose={this.onEditDrawerclose}
          visible={this.state.drawerEditVisible}
        >
               <Form onSubmit={this.handleSubmit}>
        <Row gutter={[8, 8]} type="flex" justify="space-around" align="middle">
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("bank_name", {
                rules: [{ required: true, message: "กรุณาใส่ชื่อธนาคาร" }]
              })(<Input placeholder="ธนาคาร" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("account_name", {
                rules: [{ required: true, message: "ชื่อเจ้าของบัญชี" }]
              })(<Input placeholder="ชื่อเจ้าของบัญชี" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("account_number", {
                rules: [{ required: true, message: "เลขที่บัญชี" }]
              })(<Input placeholder="เลขที่บัญชี" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button
                htmlType="submit"
                block
                disabled={hasErrors(getFieldsError())}
                type="primary"
              >
                ยืนยันการแก้ไข
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
        </Drawer>
      </Layout>
    );
  }
}

export default StoreBank;
