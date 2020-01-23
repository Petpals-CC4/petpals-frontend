import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, Avatar, Typography, Input, Form, Icon, Button, message } from 'antd';

import Axios from '../../utils/api.service'

export class Signup extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    isStoreRegister: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.signUp(values.username, values.password)
      }
    });
  }

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleClickToggleStoreRegister = () => {
    this.setState((state) => ({
      isStoreRegister: !state.isStoreRegister
    }))
  }

  signUp = (username, password) => {
    Axios.post(`/signup${this.state.isStoreRegister ? "_store" : ""}`, { username, password })
      .then(result => {
        // console.log(result.data)
        message.success(result.data.message)
        this.props.history.push("/signin")
        this.props.onChangeMode("signin")() // redirect trick :D 
      }).catch(err => {
        // err.response.status
        // console.error(err)
        message.error(err.response.data.message || "กรุณาลองใหม่อีกครั้ง")
      })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('กรุณากรอกรหัสผ่านให้ตรงกัน');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card id="signin-signup-form">
        <div style={{ marginLeft: "-24px", textAlign: "left", marginBottom: "1em" }}>
          <Button
            onClick={this.handleClickToggleStoreRegister}
            shape="round"
            type="primary"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            <span>{this.state.isStoreRegister ? "ลงทะเบียนผู้ใช้งาน คลิ๊ก!" : "ลงทะเบียนเป็นพี่เลี้ยง คลิ๊ก!"}</span>
          </Button>
        </div>
        <Avatar src="/PicCorgi3.svg" shape="square" size={150} style={{width:'auto'}} />
        <Typography.Title level={2} className="textCenter" style={{ marginTop: "1em" }}>
          {this.state.isStoreRegister ? "ลงทะเบียนพี่เลี้ยง" : "ลงทะเบียนผู้ใช้งาน"}
        </Typography.Title>
        <Form onSubmit={this.handleSubmit} className="signin-signup-form">
          <Form.Item hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  type: 'email',
                  message: 'อีเมลล์ไม่ถูกต้อง!',
                },
                {
                  required: true,
                  message: 'กรุณาใส่อีเมลล์ของคุณ!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="อีเมลล์"
              />,
            )}
          </Form.Item>
          {/* <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item> */}
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'กรุณาใส่รหัสผ่าน!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="รหัสผ่าน" />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'กรุณายืนยันรหัสผ่าน',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="ยืนยันรหัสผ่าน" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(<Checkbox className="signin-signup-form-remember">Remember me</Checkbox>)}

            <Link to="/" className="signin-signup-form-forgot">
              Forgot password
            </Link> */}

            <Button type="primary" htmlType="submit" className="signin-signup-form-button">
              สมัคร
            </Button>

            Or <Link to="/signin" onClick={this.props.onChangeMode("signin")}>กลับไปหน้าลงชื่อเข้าใช้!</Link>

          </Form.Item>
        </Form>
      </Card>
    )
  }
}

export default Form.create({ name: 'signup' })(withRouter(Signup))
