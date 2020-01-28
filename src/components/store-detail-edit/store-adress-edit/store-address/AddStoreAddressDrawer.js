import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Drawer } from "antd";
import Axios from "../../../../utils/api.service";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class AddStoreAddressDrawer extends Component {
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
        let result = await Axios.post(`/address`, {
          house_no: values.house_no,
          village_no: "",
          road: values.road,
          sub_district: values.sub_district,
          district: values.district,
          province: values.province,
          post_code: values.post_code,
          store_id: 1
        });
        console.log(result.data);
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const { visible, handleCloseDrawer } = this.props;
    return (
      <Drawer
        placement="right"
        width="350px"
        closable={true}
        onClose={handleCloseDrawer}
        visible={visible}
        title="เพิ่มที่อยู่"
      >
        <Form onSubmit={this.handleSubmit}>
          <Row
            gutter={[8, 8]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator("้house_no", {
                  rules: [{ required: true, message: "กรุณาใส่เลขที่บ้าน" }]
                })(<Input placeholder="เลขที่บ้าน" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator("road", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อถนน" }]
                })(<Input placeholder="ชื่อถนน" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator("sub_district", {
                  rules: [{ required: true, message: "กรุณาใส่แขวง/ตำบล" }]
                })(<Input placeholder="แขวง/ตำบล" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator("district", {
                  rules: [{ required: true, message: "กรุณาใส่เขต/อำเภอ" }]
                })(<Input placeholder="เขต/อำเภอ" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator("province", {
                  rules: [{ required: true, message: "กรุณาใส่จังหวัด" }]
                })(<Input placeholder="จังหวัด" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                {getFieldDecorator("post_code", {
                  rules: [{ required: true, message: "กรุณาใส่รหัสไปรษณีย์" }]
                })(<Input placeholder="รหัสไปรษณีย์" />)}
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
                  เพิ่มที่อยู่
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    );
  }
}

export default Form.create({ name: "add_address_form" })(AddStoreAddressDrawer);
