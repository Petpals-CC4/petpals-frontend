import React, { Component } from "react"
import { Form, Row, Col, Button, Input, Drawer } from "antd"

class EditStoreBioDrawer extends Component {
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleChangeNumber = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
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

  componentDidMount = () => {
    const { form } = this.props
    const { store_name, store_description } = this.props
    form.setFieldsValue({
      store_name,
      store_description
    });
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
        title="แก้ไขข้อมูลร้านค้า"
      >
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={[8, 8]} type="flex" justify="space-around" align="middle">
            <Col span={24}>
              <Form.Item label="ชื่อร้านค้า">
                {getFieldDecorator("store_name", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อร้าน" }]
                })(<Input placeholder="ชื่อร้านค้า" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="รายละเอียดร้านค้า">
                {getFieldDecorator("store_description", {
                  rules: [{ required: true, message: "กรุณาใส่รายละเอียดร้านค้า" }]
                })(<Input.TextArea
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  placeholder="รายละเอียดร้านค้า" />)}
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
                  ตกลง
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    )
  }
}

export default Form.create({ name: "edit_store_bio_drawer_form" })(EditStoreBioDrawer)