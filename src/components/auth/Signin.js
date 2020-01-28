import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  Avatar,
  Typography,
  Input,
  Form,
  Icon,
  Button,
  Checkbox,
  message,
  Row,
  Col,
  Divider
} from "antd";

import Axios from "../../utils/api.service";
import { actions as authAction } from "../../redux/reducers/auth";

export class Signin extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.signIn(values.username, values.password, values.remember);
      }
    });
  };

  signIn = (username, password, remember) => {
    Axios.post("/signin", { username, password })
      .then(result => {
        // console.log(result.data)
        this.props.signin(result.data.token);
      })
      .catch(err => {
        // err.response.status
        message.error(err.response.data.message || "Please try again later");
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.role !== this.props.role && this.props.role !== "guest") {
      // Found user not a guest
      this.props.history.push("/");
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Col>
          <Card id="signin-signup-form">
            <Avatar src="/PicCorgi1.svg" shape="square" size={150} />
            <Typography.Title
              level={2}
              className="textCenter"
              style={{ color: "#0F4C81" }}
            >
              ลงชื่อเข้าใช้
            </Typography.Title>
            <Form onSubmit={this.handleSubmit} className="signin-signup-form">
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "กรุณาใส่ชื่อผู้ใช้!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="user"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="ชื่อผู้ใช้"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "กรุณาใส่รหัสผ่าน!" }]
                })(
                  <Input.Password
                    prefix={
                      <Icon
                        type="lock"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="รหัสผ่าน"
                  />
                )}
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: false
                })(
                  <Checkbox className="signin-signup-form-remember">
                    จดจำรหัสผ่าน
                    </Checkbox>
                )}
                <Link to="/" className="signin-signup-form-forgot">
                  ลืมรหัสผ่าน
                  </Link>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="signin-signup-form-button"
                >
                  ลงชื่อเข้าใช้
                  </Button>
                หรือ <Link
                  to="/signup"
                  onClick={this.props.onChangeMode("signup")}
                >
                  สมัครสมาชิก
                </Link>
              </Form.Item>
              <Divider style={{ margin: "8px 0px" }} />
              <Form.Item style={{ marginBottom: 0 }}>
                <Link
                  to="/"
                >
                  กลับเข้าสู่หน้าหลัก
                  </Link>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  role: auth.role
});

const mapDispatchToProps = {
  ...authAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: "signin" })(withRouter(Signin)));
