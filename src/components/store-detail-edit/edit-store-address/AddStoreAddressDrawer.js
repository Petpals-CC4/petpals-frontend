import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Drawer } from "antd";

class AddStoreAddressDrawer extends Component {

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  checkNumber = (rule, value, callback) => {
    if (isNaN(value)) {
      callback("กรุณาใส่รหัสไปรษณีย์");
    } else if (value < 0) {
      callback("กรุณาใส่รหัสไปรษณีย์ให้ถูกต้อง")
    } else {
      let firstLetter = value.split("")[0]
      return firstLetter !== "." ? callback() : callback("กรุณาใส่รหัสไปรษณีย์ให้ถูกต้อง")
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      form,
      handleClickSave
    } = this.props
    form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values);
        handleClickSave({
          house_no: values.house_no,
          village_no: "",
          road: values.road,
          sub_district: values.sub_district,
          district: values.district,
          province: values.province,
          post_code: values.post_code,
          store_id: 1
        })

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
              <Form.Item label="บ้านเลขที่">
                {getFieldDecorator("house_no", {
                  rules: [{ required: true, message: "กรุณาใส่บ้านเลขที่" }]
                })(<Input placeholder="บ้านเลขที่" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="ถนน">
                {getFieldDecorator("road", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อถนน" }]
                })(<Input placeholder="ถนน" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="แขวง/ตำบล">
                {getFieldDecorator("sub_district", {
                  rules: [{ required: true, message: "กรุณาใส่แขวง/ตำบล" }]
                })(<Input placeholder="แขวง/ตำบล" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="เขต/อำเภอ">
                {getFieldDecorator("district", {
                  rules: [{ required: true, message: "กรุณาใส่เขต/อำเภอ" }]
                })(<Input placeholder="เขต/อำเภอ" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="จังหวัด">
                {getFieldDecorator("province", {
                  rules: [{ required: true, message: "กรุณาใส่จังหวัด" }]
                })(<Input placeholder="จังหวัด" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="รหัสไปรษณีย์">
                {getFieldDecorator("post_code", {
                  rules: [
                    { required: true, message: "กรุณาใส่รหัสไปรษณีย์" },
                    { validator: this.checkNumber }
                  ]
                })(<Input placeholder="รหัสไปรษณีย์" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  htmlType="submit"
                  block
                  disabled={this.hasErrors(getFieldsError())}
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
