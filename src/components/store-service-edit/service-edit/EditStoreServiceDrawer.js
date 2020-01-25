import React, { Component } from 'react'
import { Form, Row, Col, Button, Input } from 'antd';
import axios from "../../../utils/api.service";
import { withRouter } from "react-router-dom";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export class EditStoreServiceDrawer extends Component {
  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let result = await axios.push(`/service/:id`, {
          service_name: values.service_name,
          service_description: values.service_description,
          service_price: values.service_price,
          store_id: values.store_id
        });
        console.log(result.data);
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row gutter={[8, 8]} type="flex" justify="space-around" align="middle">
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("service_name", {
                rules: [{ required: true, message: "กรุณาใส่ชื่อบริการ" }]
              })(<Input placeholder="ชื่อบริการดูแลน้อง" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("service_description", {
                rules: [{ required: true, message: "กรุณาใส่รายละเอียด" }]
              })(<Input placeholder="รายละเอียดบริการดูแลน้อง" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("service_price", {
                rules: [{ required: true, message: "กรุณาใส่ราคา" }]
              })(<Input placeholder="ราคา" />)}
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
    )
  }
}

export default Form.create({ name: "edit_storeServiceDrawer_Form" })(withRouter(EditStoreServiceDrawer))
