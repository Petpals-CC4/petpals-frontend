import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Input,
  Drawer,
  message,
} from "antd";

class EditStoreAddressDrawer extends Component {
  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addressDetail, form, handleClickSave } = this.props;
    form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values);
        if (addressDetail) {
          handleClickSave({ ...values, address_id: addressDetail.address_id });
        } else {
          message.error("ไม่สามารถแก้ไขรายการได้");
        }
      }
    });
  };

  componentDidMount = () => {
    const { addressDetail, form } = this.props;
    if (addressDetail) {
      const {
        house_no,
        road,
        sub_district,
        district,
        province,
        post_code
      } = addressDetail;
      form.setFieldsValue({
        house_no,
        road,
        sub_district,
        district,
        province,
        post_code
      });
    }
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
        title="แก้ไขที่อยู่"
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
                {getFieldDecorator("้house_no", {
                  rules: [{ required: true, message: "กรุณาใส่บ้านเลขที่" }]
                })(<Input placeholder="บ้านเลขที่" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="ถนน">
                {getFieldDecorator("road", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อถนน" }]
                })(<Input placeholder="ชื่อถนน" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="แขวง/ตำบล">
                {getFieldDecorator("sub_district", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อแขวง/ตำบล" }]
                })(<Input placeholder="ชื่อถนน" />)}
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
                  rules: [{ required: true, message: "กรุณาใส่รหัสไปรษณีย์" }]
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
                  ยืนยันการแก้ไข
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    );
  }
}

export default Form.create({ name: "edit_store_address_drawer_Form" })(
  EditStoreAddressDrawer
);
