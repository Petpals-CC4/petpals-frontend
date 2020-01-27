import React, { Component } from 'react'
import { Form, Row, Col, Button, Input, Drawer, Select, Icon } from 'antd';

import { ReactComponent as bblSvg } from '../../../images/bank/bbl.svg'
import { ReactComponent as kbankSvg } from '../../../images/bank/kbank.svg'
import { ReactComponent as ktbSvg } from '../../../images/bank/ktb.svg'
import { ReactComponent as tmbSvg } from '../../../images/bank/tmb.svg'
import { ReactComponent as scbSvg } from '../../../images/bank/scb.svg'
import { ReactComponent as citiSvg } from '../../../images/bank/citi.svg'
import { ReactComponent as smbcSvg } from '../../../images/bank/smbc.svg'
import { ReactComponent as scSvg } from '../../../images/bank/sc.svg'
import { ReactComponent as cimbSvg } from '../../../images/bank/cimb.svg'
import { ReactComponent as uobSvg } from '../../../images/bank/uob.svg'
import { ReactComponent as baySvg } from '../../../images/bank/bay.svg'
import { ReactComponent as gsbSvg } from '../../../images/bank/gsb.svg'
import { ReactComponent as baacSvg } from '../../../images/bank/baac.svg'
import { ReactComponent as tbankSvg } from '../../../images/bank/tbank.svg'
import { ReactComponent as ibankSvg } from '../../../images/bank/ibank.svg'
import { ReactComponent as tiscoSvg } from '../../../images/bank/tisco.svg'
import { ReactComponent as kkSvg } from '../../../images/bank/kk.svg'
import { ReactComponent as icbcSvg } from '../../../images/bank/icbc.svg'
import { ReactComponent as tcrbSvg } from '../../../images/bank/tcrb.svg'
import { ReactComponent as lhbSvg } from '../../../images/bank/lhb.svg'

const { Option } = Select

class AddStoreBankDrawer extends Component {
  state = {
    bankList: [
      "ธนาคารกรุงเทพ",
      "ธนาคารกสิกรไทย",
      "ธนาคารกรุงไทย",
      "ธนาคารทหารไทย",
      "ธนาคารไทยพาณิชย์",
      "ธนาคารซิตี้แบงค์",
      "ธนาคารซูมิโตโม มิตซุย แบงค์กิ้ง คอร์ปอเรชั่น",
      "ธนาคารสแตนดาร์ดชาร์เตอร์ด",
      "ธนาคารซีไอเอ็มบีไทย",
      "ธนาคารยูโอบี",
      "ธนาคารกรุงศรีอยุธยา",
      "ธนาคารออมสิน",
      "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร",
      "ธนาคารธนชาต",
      "ธนาคารอิสลามแห่งประเทศไทย",
      "ธนาคารทิสโก้",
      "ธนาคารเกียรตินาคิน",
      "ธนาคารไอซีบีซี",
      "ธนาคารไทยเครดิต",
      "ธนาคารแลนด์ แอนด์ เฮ้าส์"
    ]
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleChangeNumber = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
  }

  checkNumber = (rule, value, callback) => {
    if (isNaN(value)) {
      callback("กรุณาใส่เลขที่บัญชี");
    } else if (value < 0) {
      callback("กรุณาใส่เลขที่บัญชีให้ถูกต้อง")
    } else {
      let firstLetter = value.split("")[0]
      return firstLetter !== "." ? callback() : callback("กรุณาใส่เลขที่บัญชีให้ถูกต้อง")
    }
  };

  getBankIcon = (bank_name) => {
    if (bank_name === "ธนาคารกรุงเทพ") return <Icon className="bankIcon" component={bblSvg} style={{ background: "#1e4598", display: "inline" }} />
    if (bank_name === "ธนาคารกสิกรไทย") return <Icon className="bankIcon" component={kbankSvg} style={{ background: "#138f2d", display: "inline" }} />
    if (bank_name === "ธนาคารกรุงไทย") return <Icon className="bankIcon" component={ktbSvg} style={{ background: "#1ba5e1", display: "inline" }} />
    if (bank_name === "ธนาคารทหารไทย") return <Icon className="bankIcon" component={tmbSvg} style={{ background: "#1279be", display: "inline" }} />
    if (bank_name === "ธนาคารไทยพาณิชย์") return <Icon className="bankIcon" component={scbSvg} style={{ background: "#4e2e7f", display: "inline" }} />
    if (bank_name === "ธนาคารซิตี้แบงค์") return <Icon className="bankIcon" component={citiSvg} style={{ background: "#1583c7", display: "inline" }} />
    if (bank_name === "ธนาคารซูมิโตโม มิตซุย แบงค์กิ้ง คอร์ปอเรชั่น") return <Icon className="bankIcon" component={smbcSvg} style={{ background: "#a0d235", display: "inline" }} />
    if (bank_name === "ธนาคารสแตนดาร์ดชาร์เตอร์ด") return <Icon className="bankIcon" component={scSvg} style={{ background: "#0f6ea1", display: "inline" }} />
    if (bank_name === "ธนาคารซีไอเอ็มบีไทย") return <Icon className="bankIcon" component={cimbSvg} style={{ background: "#7e2f36", display: "inline" }} />
    if (bank_name === "ธนาคารยูโอบี") return <Icon className="bankIcon" component={uobSvg} style={{ background: "#0b3979", display: "inline" }} />
    if (bank_name === "ธนาคารกรุงศรีอยุธยา") return <Icon className="bankIcon" component={baySvg} style={{ background: "#fec43b", display: "inline" }} />
    if (bank_name === "ธนาคารออมสิน") return <Icon className="bankIcon" component={gsbSvg} style={{ background: "#eb198d", display: "inline" }} />
    if (bank_name === "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร") return <Icon className="bankIcon" component={baacSvg} style={{ background: "#4b9b1d", display: "inline" }} />
    if (bank_name === "ธนาคารธนชาต") return <Icon className="bankIcon" component={tbankSvg} style={{ background: "#fc4f1f", display: "inline" }} />
    if (bank_name === "ธนาคารอิสลามแห่งประเทศไทย") return <Icon className="bankIcon" component={ibankSvg} style={{ background: "#184615", display: "inline" }} />
    if (bank_name === "ธนาคารทิสโก้") return <Icon className="bankIcon" component={tiscoSvg} style={{ background: "#12549f", display: "inline" }} />
    if (bank_name === "ธนาคารเกียรตินาคิน") return <Icon className="bankIcon" component={kkSvg} style={{ background: "#199cc5", display: "inline" }} />
    if (bank_name === "ธนาคารไอซีบีซี") return <Icon className="bankIcon" component={icbcSvg} style={{ background: "#c50f1c", display: "inline" }} />
    if (bank_name === "ธนาคารไทยเครดิต") return <Icon className="bankIcon" component={tcrbSvg} style={{ background: "#0a4ab3", display: "inline" }} />
    if (bank_name === "ธนาคารแลนด์ แอนด์ เฮ้าส์") return <Icon className="bankIcon" component={lhbSvg} style={{ background: "#6d6e71", display: "inline" }} />
    return <Icon className="bankIcon" type="close-circle" style={{ background: "#B3B7BB", display: "inline" }} />
  }

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

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const {
      visible,
      handleCloseDrawer
    } = this.props
    const {
      bankList
    } = this.state
    return (
      <Drawer
        placement="right"
        width="350px"
        closable={true}
        onClose={handleCloseDrawer}
        visible={visible}
        title="เพิ่มบัญชีธนาคาร"
      >
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={[8, 8]} type="flex" justify="space-around" align="middle">
            <Col span={24}>
              <Form.Item label="ชื่อธนาคาร">
                {getFieldDecorator('bank_name', this.state.configNotEmptyRule)(
                  <Select
                    showSearch
                    className="bankCreateSelect"
                    placeholder="กรุณาเลือกธนาคาร"
                  >
                    {bankList.map((bankName, index) => {
                      return (
                        <Option key={index} className="optionWithIcon justifyStart" value={bankName}>
                          {this.getBankIcon(bankName)}
                          <div style={{ display: "inline-block", paddingLeft: "1em", lineHeight: "22px" }}>
                            <div>{bankName}</div>
                          </div>
                        </Option>
                      )
                    })}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="ชื่อบัญชีธนาคาร">
                {getFieldDecorator("account_name", {
                  rules: [{ required: true, message: "กรุณาใส่ชื่อบัญชี" }]
                })(<Input placeholder="ชื่อบัญชีธนาคาร" />)}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="เลขที่บัญชี">
                {getFieldDecorator("account_number", {
                  rules: [
                    { required: true, message: "กรุณาใส่เลขที่บัญชี" },
                    { validator: this.checkNumber }
                  ]
                })(<Input placeholder="เลขที่บัญชี" />)}
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
                  เพิ่มบัญชีธนาคาร
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    )
  }
}

export default Form.create({ name: "add_store_bank_drawer_Form" })(AddStoreBankDrawer)
