import React, { Component } from 'react'
import { Row, Col, Input, Form, Button, Rate, Icon, message } from 'antd'

import Axios from '../../utils/api.service'
import { withRouter } from 'react-router-dom'

// import boneIcon from '../../images/boneicon2.png'
// import boneEmptyIcon from '../../images/boneicon3.png'

class Feedback extends Component {
  state = {
    storeName: "",
    storeID: null
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log('Received values of form: ', value);
        this.sendFeedback({ ...value, order_id: this.props.match.params.order_id })
      }
    })
  }

  sendFeedback = async (objData) => {
    try {
      let result = await Axios.post(`/feedback/${this.state.storeID}`, objData)
      console.log(result.data);
      message.success("ส่งคะแนนร้านค้าสำเร็จ")
      this.props.history.push("/order")
    } catch (error) {
      message.error("ส่งคะแนนร้านค้าไม่สำเร็จ กรุณาลองใหม่อีกครั้งในภายหลัง")
    }
  }

  getOrderDetail = async () => {
    let result = await Axios.get(`/order/${this.props.match.params.order_id}`)
    console.log(result.data);
    this.setState({
      storeID: result ? result.data.store_id : null,
      storeName: result ? result.data.store.store_name : "",
    })
  }

  componentDidMount = () => {
    this.getOrderDetail()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      storeName
    } = this.state

    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 12 }
    }

    const BoneSvg = () => (
      <svg width="30px" height="30px" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M740.73,141.22a117.64,117.64,0,0,0-34.46-88.36C660.17,6.76,585.71,7,539.61,53.14,503.18,89.57,495,143.28,516.88,188L201.3,503.65c-44.69-21.88-98.4-13.71-134.83,22.72a117.75,117.75,0,0,0,88.08,201.12A117.27,117.27,0,0,0,189,815.75c46.11,46.11,120.56,45.83,166.67-.28A116.88,116.88,0,0,0,378.3,680.64L693.88,365.06c44.69,21.88,98.4,13.71,134.83-22.72,46.1-46.11,46.29-120.75.19-166.85A117.35,117.35,0,0,0,740.73,141.22Z" />
      </svg>
    );
    const BoneIcon = props => <Icon component={BoneSvg} {...props} />;

    return (
      <div style={{ margin: '8em 2em 0em' }}>
        <Form layout="horizontal" onSubmit={this.handleSubmit} style={{ marginTop: '75px' }}>
          <Row gutter={[8, 8]}>
            <Col>
              <Form.Item label="ร้านค้าที่เลือก:" className={"formItemShowText"} {...formItemLayout} >
                <Input value={storeName} disabled />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="คะแนน:" className={"formItemShowText"} {...formItemLayout}>
                {getFieldDecorator('rating', {
                  rules: [{ required: true, message: 'กรุณาใส่คะแนน!' }],
                })(
                  <Rate character={<BoneIcon />} style={{ color: "#0F4C81", marginLeft: '15px' }} />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="คำอธิบาย:" className={"formItemShowText"} {...formItemLayout}>
                {getFieldDecorator('comment', {
                  rules: [{ required: true, message: 'กรุณากรอกคำอธิบาย!' }],
                })(
                  <Input.TextArea
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    placeholder="คำอธิบาย" />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  ส่ง
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

      </div >
    )
  }
}

const FeedbackWrapped = Form.create({ name: 'feedback_page_form' })(Feedback)
export default withRouter(FeedbackWrapped)
