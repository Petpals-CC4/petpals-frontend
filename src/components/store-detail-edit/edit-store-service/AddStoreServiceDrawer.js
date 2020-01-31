import React, { Component } from 'react'
import { Form, Row, Col, Button, Input, Drawer } from 'antd';

class AddStoreServiceDrawer extends Component {
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  checkNumber = (rule, value, callback) => {
    if (isNaN(value)) {
      callback("กรุณาใส่ราคา");
    } else if (value < 0) {
      callback("ราคาต้องมากกว่า 0")
    } else {
      let firstLetter = value.split("")[0]
      return firstLetter !== "." ? callback() : callback("กรุณาใส่ราคาให้ถูกต้อง")
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, handleClickSave } = this.props
    form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values);
        handleClickSave({ ...values })
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const {
      visible,
      handleCloseDrawer
    } = this.props
    return (
      <Drawer
        placement="right"
        width="350px"
        closable={true}
        onClose={handleCloseDrawer}
        visible={visible}
        title="เพิ่มบริการ"
      >
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={[8, 8]} type="flex" justify="space-around" align="middle">
            <Col span={24}>
              <Form.Item label="ชื่อบริการ">
                {getFieldDecorator("service_name", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อบริการ" }]
                })(<Input placeholder="ชื่อบริการดูแลน้อง" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="รายละเอียด">
                {getFieldDecorator("service_description", {
                  rules: [{ required: true, message: "กรุณาใส่รายละเอียด" }]
                })(<Input.TextArea
                  placeholder="รายละเอียดบริการดูแลน้อง"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="ราคา">
                {getFieldDecorator("service_price", {
                  rules: [
                    { required: true, message: "กรุณาใส่ราคา" },
                    { validator: this.checkNumber }
                  ]
                })(<Input placeholder="ราคา" />)}
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
                  เพิ่มบริการ
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    )
  }
}

export default Form.create({ name: "add_store_service_drawer_Form" })(AddStoreServiceDrawer)
