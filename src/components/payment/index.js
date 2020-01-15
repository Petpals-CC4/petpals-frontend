import React, { Component } from 'react'
import { Row, Col, Button, Form, DatePicker, Input, Select, Divider } from 'antd'

import StoreBio from '../store-detail/store-info/StoreBio'

const { Option } = Select

class Payment extends Component {

  state = {
    configNotEmptyRule: {
      rules: [{ required: true, message: 'กรุณากรอกรายละเอียด!' }],
    },
    isBankTransfer: false,
    start_date: "2020-12-31",
    end_date: "2020-12-31",
    total_price: "10,000 บาท",
    booking_price: "3,000 บาท"
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['start_date'];
      console.log(rangeValue)
    })
  }

  handleSelectPaymentMethod = (value) => {
    this.setState({
      isBankTransfer: value === 1
    })
  }

  componentDidMount = () => {
    this.props.form.setFieldsValue({
      payment_method: `1`,
    });
    this.handleSelectPaymentMethod(1)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    return (
      <div style={{ margin: "2em" }}>
        <div style={{ marginBottom: "2em" }}>
          <StoreBio />
        </div>
        <div>
          <Form onSubmit={this.handleSubmit} layout="horizontal" hideRequiredMark>
            <Row gutter={[8, 8]}>
              <Col xs={24}>
                <Form.Item label="เริ่มฝากน้อง:" className={"formItemShowText"} {...formItemLayout}>
                  <strong>
                    {this.state.start_date}
                  </strong>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="รับน้องกลับ:" className={"formItemShowText"} {...formItemLayout}>
                  <strong>
                    {this.state.end_date}
                  </strong>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="ยอดชำระเงิน:" className={"formItemShowText"} {...formItemLayout}>
                  <strong>
                    {this.state.total_price}
                  </strong>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="วิธีการชำระเงิน:" className={"formItemShowText"} {...formItemLayout}>
                  {getFieldDecorator('payment_method', this.state.configNotEmptyRule)(
                    <Select
                      placeholder="กรุณาเลือกวิธีการชำระเงิน"
                      disabled
                    >
                      <Option value="1">{"โอนเงินผ่านธนาคาร"}</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              {this.state.isBankTransfer ?
                <Col xs={24}>
                  <Form.Item label="ธนาคาร:" className={"formItemShowText"} {...formItemLayout}>
                    {getFieldDecorator('bank', this.state.configNotEmptyRule)(
                      <Select
                        placeholder="ธนาคาร"
                        onChange={this.handleSelectPaymentMethod}
                      >
                        <Option value="1">{"ธนาคาร1"}</Option>
                        <Option value="2">{"ธนาคาร2"}</Option>
                        <Option value="3">{"ธนาคาร3"}</Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                : ""
              }
              <Col xs={24}>
                <Divider />
              </Col>
              <Col xs={24}>
                <Form.Item label="จำนวนเงินมัดจำที่ต้องจ่าย:" className={"formItemShowText"} {...formItemLayout}>
                  <h1>
                    {this.state.booking_price}
                  </h1>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item className={"formItemButton"}>
                  <Button block size="large" type="primary" htmlType="submit">ส่ง</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}

const WrappedPayment = Form.create({ name: 'payment_page_form' })(Payment);
export default WrappedPayment