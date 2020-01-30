import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  Avatar,
  Typography,
  Input,
  Form,
  Icon,
  Button,
  message,
  Divider,
  Col,
  Upload,
  Modal
} from "antd";

import Axios from "../../utils/api.service";

export class Signup extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    isStoreRegister: false,
    fileList: [],
    loading: false
  };

  normFile = e => {
    // console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length > 1) {
      e.fileList.shift();
    }
    return e && e.fileList;
  };

  handlePreview = file => {
    console.log(file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleClosePreview = () => this.setState({ previewVisible: false });

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.signUp(
          values.username,
          values.password,
          values.firstname,
          values.lastname,
          values.phone,
          values.profile_image_url
        );
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleClickToggleStoreRegister = () => {
    this.setState(state => ({
      isStoreRegister: !state.isStoreRegister
    }));
  };

  signUp = (
    username,
    password,
    firstname,
    lastname,
    phone,
    profile_image_url
  ) => {
    console.log({
      username,
      password,
      firstname,
      lastname,
      phone,
      profile_image_url
    });

    let fData = new FormData()
    fData.append("username", username)
    fData.append("password", password)
    fData.append("firstname", firstname)
    fData.append("lastname", lastname)
    fData.append("phone", phone)
    fData.append("profile_image_url", profile_image_url[0].originFileObj)

    Axios.post(`/signup${this.state.isStoreRegister ? "_store" : ""}`, fData)
      .then(result => {
        // console.log(result.data)
        message.success(result.data.message);
        this.props.history.push("/signin");
        this.props.onChangeMode("signin")(); // redirect trick :D
      })
      .catch(err => {
        // err.response.status
        // console.error(err)
        message.error(err.response.data.message || "กรุณาลองใหม่อีกครั้ง");
      });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("กรุณากรอกรหัสผ่านให้ตรงกัน");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { previewVisible, previewImage } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 12 }
    };

    return (
      <Card id="signin-signup-form">
        <div
          style={{
            marginLeft: "-24px",
            textAlign: "left",
            marginBottom: "1em"
          }}
        >
          <Button
            onClick={this.handleClickToggleStoreRegister}
            shape="round"
            type="primary"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <span>
              {this.state.isStoreRegister
                ? "ลงทะเบียนผู้ใช้งาน คลิ๊ก!"
                : "ลงทะเบียนเป็นพี่เลี้ยง คลิ๊ก!"}
            </span>
          </Button>
        </div>
        <Avatar
          src="/PicCorgi3.svg"
          shape="square"
          size={150}
          style={{ width: "auto" }}
        />
        <Typography.Title
          level={2}
          className="textCenter"
          style={{ marginTop: "1em" }}
        >
          {this.state.isStoreRegister
            ? "ลงทะเบียนพี่เลี้ยง"
            : "ลงทะเบียนผู้ใช้งาน"}
        </Typography.Title>
        <Form onSubmit={this.handleSubmit} className="signin-signup-form">
          <Form.Item hasFeedback>
            {getFieldDecorator("username", {
              rules: [
                {
                  type: "email",
                  message: "อีเมลล์ไม่ถูกต้อง!"
                },
                {
                  required: true,
                  message: "กรุณาใส่อีเมลล์ของคุณ!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="อีเมลล์"
              />
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
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "กรุณาใส่รหัสผ่าน!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(
              <Input.Password
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="รหัสผ่าน"
              />
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "กรุณายืนยันรหัสผ่าน"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(
              <Input.Password
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="ยืนยันรหัสผ่าน"
                onBlur={this.handleConfirmBlur}
              />
            )}
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(<Checkbox className="signin-signup-form-remember">Remember me</Checkbox>)}

            <Link to="/" className="signin-signup-form-forgot">
              Forgot password
            </Link> */}
            <Form.Item hasFeedback>
              {getFieldDecorator("firstname", {
                rules: [
                  {
                    required: true,
                    message: "ชื่อ"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="ชื่อ"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("lastname", {
                rules: [
                  {
                    required: true,
                    message: "นามสกุล"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="นามสกุล"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: true,
                    message: "เบอร์โทร"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="เบอร์โทร"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>
            <Col>
              <Form.Item
                label="รูปโปรไฟล์"
                extra="(รองรับรูปภาพที่มีนามสกุล .png, .jpg และ .jpeg เท่านั้น)"
                className={"formItemShowText"}
                {...formItemLayout}
              >
                {getFieldDecorator("profile_image_url", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile,
                  rules: [
                    { required: true, message: "กรุณาเลือกอัพโหลดรูปโปรไฟล์!" }
                  ]
                })(
                  <Upload
                    listType="picture-card"
                    onPreview={this.handlePreview}
                    onRemove={file => {
                      this.setState({ fileList: [] });
                    }}
                    beforeUpload={file => {
                      const isJpgOrPng =
                        file.type === "image/jpeg" || file.type === "image/png";
                      if (!isJpgOrPng) {
                        message.error(
                          "รองรับรูปภาพที่มีนามสกุล .png, .jpg และ .jpeg เท่านั้น!"
                        );
                      }
                      const isLt5M = file.size / 1024 / 1024 < 5;
                      if (!isLt5M) {
                        message.error("รูปภาพมีขนาดได้ไม่เกิน 5MB");
                      }
                      this.setState({ fileList: [file] });
                      // return isJpgOrPng && isLt5M;
                      return false;
                    }}
                  >
                    {this.state.fileList <= 0 ? (
                      <div>
                        <Icon type={this.state.loading ? "loading" : "plus"} />
                        <div className="ant-upload-text">Upload</div>
                      </div>
                    ) : null}
                  </Upload>
                )}
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleClosePreview}
                >
                  <img
                    alt="uplaod"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </Form.Item>
            </Col>
            <Button
              type="primary"
              htmlType="submit"
              className="signin-signup-form-button"
            >
              ยืนยันการสมัคร
            </Button>
            หรือ{" "}
            <Link to="/signin" onClick={this.props.onChangeMode("signin")}>
              กลับไปหน้าลงชื่อเข้าใช้!
            </Link>
          </Form.Item>
          <Divider style={{ margin: "8px 0px" }} />
          <Form.Item style={{ marginBottom: 0 }}>
            <Link to="/">กลับเข้าสู่หน้าหลัก</Link>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default Form.create({ name: "signup" })(withRouter(Signup));
