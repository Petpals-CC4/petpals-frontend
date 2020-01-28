import React, { Component } from 'react'
import { Form, Row, Col, Input, Button } from 'antd';
import axios from '../../../utils/api.service'


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export class AddStoreService extends Component {
  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        let result = await axios.post(`/service`, {
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
              {getFieldDecorator("service_name", {})(
                <Input placeholder="บริการการดูแลน้อง" />
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("service_description", {})(
                <Input placeholder="รายละเอียดบริการดูแลน้อง" />
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator("service_price", {})(
                <Input placeholder="ราคาดูแลน้อง" />
              )}
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
                เพิ่มบริการดูแลน้อง
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create({ name: "add_store_service_form" })(AddStoreService)
