import React, { Component } from 'react'
import { Row, Col, Input, Form, Button, Rate, Icon } from 'antd'
import boneIcon from '../images/boneicon2.png'
import boneEmptyIcon from '../images/boneicon3.png'

const { TextArea } = Input

class FeedbackPage extends Component {
  state = {
    value: '',
    feedback: [
      {
        id:'',
        user: 'YoRHa54i',
        point: 'คะแนน ',
        rating: [],
        comment: ''
      }
    ]
  }

  handleCommentCardFont = () => {
    return this.state.feedback.map((f, fIndex) => {
      let boneRender = []
      for (let index = 0; index < 5; index++) {
        if (index < parseInt(f.rating)) {
          boneRender.push(true);
        } else {
          boneRender.push(false);
        }
      }
      return <Form key={fIndex} >
        <div>
          <h2 style={{ color: "#0F4C81" }}>
            {f.point} :
          </h2>
          {boneRender.map((bone, index) => {
            return bone ? (
              <img alt="bone"
                src={boneIcon}
                key={index}
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
                <img alt="boneEmpty"
                  src={boneEmptyIcon}
                  key={index}
                  style={{ width: "30px", height: "30px" }}
                />
              );
          })}
        </div>
      </Form>
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log('Received values of form: ', value);
        const {
          rating,
          comment
        } = this.state;
        let payload = new FormData()
        payload.append('rating', rating)
        payload.append('comment', comment)
      }
    })
  }


  handleChange = e => ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const BoneSvg = () => (
      <svg width="30px" height="30px" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M740.73,141.22a117.64,117.64,0,0,0-34.46-88.36C660.17,6.76,585.71,7,539.61,53.14,503.18,89.57,495,143.28,516.88,188L201.3,503.65c-44.69-21.88-98.4-13.71-134.83,22.72a117.75,117.75,0,0,0,88.08,201.12A117.27,117.27,0,0,0,189,815.75c46.11,46.11,120.56,45.83,166.67-.28A116.88,116.88,0,0,0,378.3,680.64L693.88,365.06c44.69,21.88,98.4,13.71,134.83-22.72,46.1-46.11,46.29-120.75.19-166.85A117.35,117.35,0,0,0,740.73,141.22Z" />
      </svg>
    );
    const BoneIcon = props => <Icon component={BoneSvg} {...props} />;
    return (
      <div style={{ margin: '8em 2em 0em' }}>
        <Form onSubmit={this.handleSubmit} layout='horizontal' >
          <Row type='flex' justify='center'>
            <Col xs={16}>
              {this.state.feedback.map(f => (
                <h2 key={f.id} style={{ color: "#0F4C81", marginRight: '10em' }}>
                  {f.user}:
                </h2>
              ))}
            </Col>
          </Row>
          <Row type='flex' justify='center'>
            <Col xs={16}>
              <Form.Item >
                {getFieldDecorator('comment', this.state.feedback)(
                  <TextArea
                    autoSize={{ minRows: 10 }}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row type='flex' justify='end' style={{ marginRight: '30px' }}>
            <Col >
              <Form.Item >
                <h2 style={{ color: "#0F4C81" }}>คะแนน :
                {getFieldDecorator('rating', this.state.feedback)(
                  <Rate character={<BoneIcon />} style={{ color: "#0F4C81", marginLeft: '15px' }} />
                )}</h2>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item style={{ marginTop: '50px' }}>
            <Button type="primary" htmlType="submit" className="Verify-form-button" style={{ display: "block", margin: "auto" }}>
              ส่ง
              </Button>
          </Form.Item>
        </Form>
      </div >

    )
  }
}

const Feedback = Form.create({ name: 'feedback_page_form' })(FeedbackPage)
export default Feedback
