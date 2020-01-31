import React, { Component } from 'react'
import { Form, Row, Col, Button, Input, Drawer, message } from 'antd';

class EditStoreServiceDrawer extends Component {
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleChangeNumber = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
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
    const { serviceDetail, form, handleClickSave } = this.props
    form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values);
        if (serviceDetail) {
          handleClickSave({ ...values, service_id: serviceDetail.service_id })
        } else {
          message.error("ไม่สามารถแก้ไขรายการได้")
        }
      }
    });
  };

  componentDidMount = () => {
    const { serviceDetail, form } = this.props
    if (serviceDetail) {
      const {
        service_name,
        service_description,
        service_price
      } = serviceDetail
      form.setFieldsValue({
        service_name,
        service_description,
        service_price,
      });
    }
  }

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
        title="แก้ไขบริการ"
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
                  initialValue: 0,
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
                  ยืนยันการแก้ไข
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    )
  }
}

export default Form.create({ name: "edit_store_service_drawer_Form" })(EditStoreServiceDrawer)
