import React, { Component } from 'react'
import { Row, Col, Upload, Icon, Card, Form, Select, Button, Input } from 'antd'

const { Option } = Select


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export class VerifyPaymentPage extends Component {
  state = {
    data: {
      verifiedSlip: "",
      bank: ""
    },
    loading: false,
  }


  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };


  render() {
    const uploadButton = (
      <div >
        <Icon type={this.state.loading ? 'loading' : 'upload'} />
        <div >Upload</div>
      </div>
    )
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    const formVerifyLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }

    const { imageUrl } = this.state;
    return (
      <div style={{ margin: '2em' }}>
        <Form style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}>
          <Row >
            <Col >
              <Upload listType="picture-card"
                onChange={this.handleChange} >
                {this.state.data.verifiedSlip}
                {imageUrl ? <img src={imageUrl}  style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Col>
          </Row>
        </Form>
        <Form layout="horizontal" style={{ marginTop: '75px' }}>
          <Row gutter={[8, 8]}>
            <Col >
              <Form.Item label="ธนาคารที่โอน:" className={"formItemShowText"} {...formItemLayout} >
                <Select
                  placeholder="กรุณาเลือกธนาคารที่โอน"
                >
                  <Option value="1">{"ธนาคาร1"}</Option>
                  <Option value="2">{"ธนาคาร2"}</Option>
                  <Option value="3">{"ธนาคาร3"}</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col >
              <Form.Item label="จำนวนเงิน:" className={"formItemShowText"} {...formVerifyLayout}>
                <Input
                  placeholder="จำนวนเงินที่โอน"
                />
              </Form.Item>
            </Col>
            <Col >
              <Form.Item label="ชื่อ:" className={"formItemShowText"} {...formVerifyLayout}>
                <Input
                  placeholder="ชื่อ"
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="เบอร์โทรศัพท์:" className={"formItemShowText"} {...formVerifyLayout}>
                <Input
                  placeholder="เบอร์โทรศัพท์"
                />
              </Form.Item>
            </Col>
            <Form.Item style={{ marginTop: '50px' }}>
              <Button type="primary" htmlType="submit" className="Verify-form-button" style={{ display: "block", margin: "auto" }}>
                ส่ง
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    )
  }
}

export default VerifyPaymentPage
