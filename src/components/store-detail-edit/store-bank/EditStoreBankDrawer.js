import React, { Component } from "react";
import { Button, Input, Row, Col, Form, Drawer, message } from "antd";

class EditStoreBank extends Component {
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  handleEditSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values);
        this.props.showUpdateConfirm({
          bank_id: "",
          bank_name: values.bank_name,
          account_name: values.account_name,
          account_number: values.account_number
        });

       
      }
    });
    this.getBank();
  };

  componentDidMount = () => {
    const { accountDetail, form } = this.props;
    if (accountDetail) {
      const { bank_name, account_name, account_number } = accountDetail;
      form.setFieldsValue({
        bank_name,
        account_name,
        account_number
      });
    }
  };

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const {
      
    }
    return (
      <>
        <Form onSubmit={this.handleEditSubmit}>
          <Row
            gutter={[8, 8]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator(
                  "bank_name",
                  {}
                )(<Input placeholder="ธนาคาร" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator(
                  "account_name",
                  {}
                )(<Input placeholder="ชื่อเจ้าของบัญชี" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator(
                  "account_number",
                  {}
                )(<Input placeholder="เลขที่บัญชี" />)}
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
      </>
    );
  }
}

export default Form.create({ name: "edit_bank_form" })(
  withRouter(EditStoreBank)
);
