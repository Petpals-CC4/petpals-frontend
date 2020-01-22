import React, { Component } from "react";
import { Button, Input, Row, Col, message, Form } from "antd";
import axios from "../../../utils/api.service";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddStoreBank extends Component {
  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  componentDidMount() {
    // To disable submit button at the beginning.
    // this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let result = await axios.post(`/bank`, {
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

  //   if (true) {
  //     message.success("Create bank accout is success.Have a nice day!!");
  //   } else {
  //     message.error("Sorry!! can't create new account something worng");
  //   }
  // };
  // bank_name: req.body.bank_name,
  //     account_name: req.body.account_name,
  //     account_number: req.body.account_number,
  //     store_id: req.body.store_id

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
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
                เพิ่มบัญชี
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create({ name: "add_bank_form" })(AddStoreBank);
