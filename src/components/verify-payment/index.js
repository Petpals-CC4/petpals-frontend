import React, { Component } from 'react'
import moment from 'moment'
import { Row, Col, Upload, Icon, Form, Button, DatePicker, TimePicker, message, Modal, Typography } from 'antd'

import Axios from "../../utils/api.service";
import { withRouter } from 'react-router-dom';

export class VerifyPayment extends Component {
  state = {
    loading: false,
    timeOpen: false,
    date: null,
    time: null,
    previewImage: "",
    previewVisible: false,
    fileList: [],
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        let data = new FormData()
        data.append("order_id", `${this.props.match.params.order_id}`)
        data.append("transfer_date", moment(fieldsValue.transfer_date).format("YYYY-MM-DD"))
        data.append("transfer_time", moment(fieldsValue.transfer_time).format("HH:mm"))
        for (const image of fieldsValue.slip_image) {
          data.append("slip_image", image.originFileObj)
        }
        this.sendUpload(data)
      }
    })
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value
    })
  };

  onDateChange = value => {
    this.onChange('date', value);
  };

  onTimeChange = value => {
    this.onChange('time', value);
  };

  disabledStartDate = date => {
    if (!date) {
      return date < moment().subtract(1, 'days');
    }
    return date < moment().subtract(1, 'days')
  };

  handleDateOpenChange = open => {
    if (!open) {
      this.setState({ timeOpen: true });
    }
  };

  handleTimeOpenChange = open => {
    this.setState({ timeOpen: open });
  };

  handlePreview = (file) => {
    console.log(file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    })
  }

  handleClosePreview = () => this.setState({ previewVisible: false })

  normFile = e => {
    // console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length > 1) {
      e.fileList.shift()
    }
    return e && e.fileList;
  };

  sendUpload = async (formData) => {
    try {
      let result = await Axios.post('/upload_slip_image', formData)
      console.log(result.data);
      message.success("อัพโหลดสำเร็จ")
      this.props.history.push("/")
    } catch (error) {
      message.error("อัพโหลดไม่สำเร็จ กรุณาลองอีกครั้งในภายหลัง")
    }
  }

  render() {
    const {
      timeOpen,
      previewVisible,
      previewImage
    } = this.state

    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 12 }
    }

    return (
      <div style={{ margin: "2em" }}>
        <Typography.Title level={3} className="textCenter">
          อัพโหลดหลักฐานการโอนเงิน
        </Typography.Title>
        <Form layout="horizontal" onSubmit={this.handleSubmit} style={{ marginTop: '75px' }}>
          <Row gutter={[8, 8]}>
            <Col>
              <Form.Item label="ธนาคารที่โอน:" className={"formItemShowText"} {...formItemLayout} >
                {getFieldDecorator('transfer_date', {
                  rules: [{ required: true, message: 'กรุณาเลือกวันที่โอนเงิน!' }],
                })(
                  <DatePicker
                    disabledDate={this.disabledStartDate}
                    format="YYYY-MM-DD"
                    placeholder="วันที่โอนเงิน"
                    onChange={this.onDateChange}
                    onOpenChange={this.handleDateOpenChange}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="ธนาคารที่โอน:" className={"formItemShowText"} {...formItemLayout} >
                {getFieldDecorator('transfer_time', {
                  rules: [{ required: true, message: 'กรุณาเลือกวันที่โอนเงิน!' }],
                })(
                  <TimePicker
                    format={"HH:mm"}
                    placeholder="เวลาโอนเงิน"
                    open={timeOpen}
                    onOpenChange={this.handleTimeOpenChange}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="รูปภาพหลักฐานการโอนเงิน"
                extra="(รองรับรูปภาพที่มีนามสกุล .png, .jpg, .jpeg และ .gif เท่านั้น)"
                className={"formItemShowText"}
                {...formItemLayout}
              >
                {getFieldDecorator('slip_image', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                  rules: [{ required: true, message: 'กรุณาเลือกอัพโหลดหลักฐานการโอนเงิน!' }],
                })(
                  <Upload
                    listType="picture-card"
                    onPreview={this.handlePreview}
                    onRemove={file => {
                      this.setState({ fileList: [] });
                    }}
                    beforeUpload={file => {
                      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                      if (!isJpgOrPng) {
                        message.error('รองรับรูปภาพที่มีนามสกุล .png, .jpg และ .jpeg เท่านั้น!');
                      }
                      const isLt5M = file.size / 1024 / 1024 < 5;
                      if (!isLt5M) {
                        message.error('รูปภาพมีขนาดได้ไม่เกิน 5MB');
                      }
                      this.setState({ fileList: [file] });
                      // return isJpgOrPng && isLt5M;
                      return false
                    }}
                  >
                    {this.state.fileList <= 0 ?
                      <div>
                        <Icon type={this.state.loading ? 'loading' : 'plus'} />
                        <div className="ant-upload-text">Upload</div>
                      </div>
                      : null}
                  </Upload>
                )}
                <Modal visible={previewVisible} footer={null} onCancel={this.handleClosePreview}>
                  <img alt="uplaod" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </Form.Item>
            </Col>

            <Form.Item style={{ marginTop: '50px' }}>
              <Button type="primary" htmlType="submit" style={{ display: "block", margin: "auto" }}>
                ส่ง
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    )
  }
}

const WrappedVerifyPayment = Form.create({ name: 'verify_payment_page_form' })(VerifyPayment);
export default withRouter(WrappedVerifyPayment)
