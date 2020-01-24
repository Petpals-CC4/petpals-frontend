import React, { Component } from "react";
import { Button, Input, Row, Col, Form } from "antd";
import axios from "../../../utils/api.service";
import { withRouter } from "react-router-dom";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class EditStoreBank extends Component {
  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleEditSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        this.props.showUpdateConfirm({
          bank_name: values.bank_name,
          account_name: values.account_name,
          account_number: values.account_number,
          store_id: "1"
        })
        // let result = await axios.put(`/bank/${this.props.match.params.id}`, {
        //   bank_name: values.bank_name,
        //   account_name: values.account_name,
        //   account_number: values.account_number,
        //   store_id: "1"
        // });
        // console.log(result.data);
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
      <Form onSubmit={this.handleEditSubmit}>
        <Row gutter={[8, 8]} type="flex" justify="space-around" align="middle">
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
    );
  }
}

export default Form.create({ name: "edit_bank_form" })(withRouter(EditStoreBank));
