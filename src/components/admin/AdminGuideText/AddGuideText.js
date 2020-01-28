import React, { Component } from "react";
import { Form, Row, Col, Button, Input, Drawer, Select, Icon } from "antd";

class AddGuideText extends Component {
  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, handleClickSave } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values);
        handleClickSave({ ...values });
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const { visible, handleCloseDrawer } = this.props;

    return (
      <Drawer
        placement="right"
        width="200px"
        closable={true}
        onClose={handleCloseDrawer}
        visible={visible}
        title="เพิ่มประเภทบริการ"
      >
        <Form onSubmit={this.handleSubmit}>
          <Row
            gutter={[8, 8]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={24}>
              <Form.Item label="ชื่อประเภทบริการ">
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อประเภทบริการ" }]
                })(<Input placeholder="ชื่อประเภทบริการ" />)}
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
                  ยืนยัน
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    );
  }
}

export default Form.create({ name: "add_guide_text_Form" })(AddGuideText);
