import React, { Component } from 'react'
import { Row, Col, Button, Form, Select, Divider, DatePicker, Icon, message } from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'

import StoreBio from '../store-detail/store-info/StoreBio'
import Axios from '../../utils/api.service'
import { withCommas, dateFormat } from "../../utils"
import { actions as paymentAction } from '../../redux/reducers/payment'

import { ReactComponent as bblSvg } from '../../images/bank/bbl.svg'
import { ReactComponent as kbankSvg } from '../../images/bank/kbank.svg'
import { ReactComponent as ktbSvg } from '../../images/bank/ktb.svg'
import { ReactComponent as tmbSvg } from '../../images/bank/tmb.svg'
import { ReactComponent as scbSvg } from '../../images/bank/scb.svg'
import { ReactComponent as citiSvg } from '../../images/bank/citi.svg'
import { ReactComponent as smbcSvg } from '../../images/bank/smbc.svg'
import { ReactComponent as scSvg } from '../../images/bank/sc.svg'
import { ReactComponent as cimbSvg } from '../../images/bank/cimb.svg'
import { ReactComponent as uobSvg } from '../../images/bank/uob.svg'
import { ReactComponent as baySvg } from '../../images/bank/bay.svg'
import { ReactComponent as gsbSvg } from '../../images/bank/gsb.svg'
import { ReactComponent as baacSvg } from '../../images/bank/baac.svg'
import { ReactComponent as tbankSvg } from '../../images/bank/tbank.svg'
import { ReactComponent as ibankSvg } from '../../images/bank/ibank.svg'
import { ReactComponent as tiscoSvg } from '../../images/bank/tisco.svg'
import { ReactComponent as kkSvg } from '../../images/bank/kk.svg'
import { ReactComponent as icbcSvg } from '../../images/bank/icbc.svg'
import { ReactComponent as tcrbSvg } from '../../images/bank/tcrb.svg'
import { ReactComponent as lhbSvg } from '../../images/bank/lhb.svg'

const { Option } = Select
class Payment extends Component {

  state = {
    configNotEmptyRule: {
      rules: [{ required: true, message: 'กรุณากรอกรายละเอียด!' }],
    },
    isBankTransfer: false,
    sumPrice: 0.00,
    bookingPercent: 0.30,
    bookingPrice: 0.00,
    start_date: null,
    end_date: null,
    endOpen: false,
    paymentMethodList: [],
    bankList: [],
    storeBio: {}
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      form,
      cartList,
      setReservingDate,
      startDate,
      endDate
    } = this.props
    form.validateFields((err, fieldsValue) => {
      if (!err) {
        const orderData = {
          "store_id": cartList[0].store_id,
          "payment_method_id": fieldsValue.payment_method_id,
          "bank_id": fieldsValue.payment_bank_id,
          "start_date": startDate ? moment(startDate).format("YYYY-MM-DD") : dateFormat(fieldsValue.startDate),
          "end_date": endDate ? moment(endDate).format("YYYY-MM-DD") : dateFormat(fieldsValue.endDate),
          "booking_price": this.state.bookingPrice,
          "total_price": this.state.sumPrice,
          "service_ids": cartList.map(cart => cart.id)
        }
        console.log(orderData);
        setReservingDate({
          startDate: moment(orderData.start_date),
          endDate: moment(orderData.end_date)
        })
        this.createOrder(orderData)
      }
    })
  }

  handleSelectPaymentMethod = (value) => {
    console.log(value);
  }

  disabledStartDate = start_date => {
    const { end_date } = this.state;
    if (!start_date || !end_date) {
      return start_date < moment().subtract(1, 'days');
    }
    return start_date.valueOf() > end_date.valueOf() || start_date < moment().subtract(1, 'days')
  };

  disabledEndDate = end_date => {
    const { start_date } = this.state
    if (!end_date || !start_date) {
      return end_date < moment().subtract(1, 'days');
    }
    return end_date.valueOf() <= start_date.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    })
  };

  onStartChange = value => {
    this.onChange('start_date', value);
  };

  onEndChange = value => {
    this.onChange('end_date', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
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

  createOrder = async (bodyData) => {
    try {
      let result = await Axios.post(`/order`, bodyData)
      console.log(result.data);
      message.success("สร้างรายการสำเร็จ")
      this.props.setCart()
      this.props.setReservingDate()
      window.appHistory.push("/") // TODO: !!! WE WILL GO TO ORDER LIST PAGE !!!
    } catch (error) {
      message.error("ไม่สามารถสร้างรายการได้ กรุณาลองใหม่อีกครั้ง")
    }
  }

  getStorePaymentMethod = async () => {
    let result = await Axios.get(`/payment_method/${this.props.cartList[0].store_id}`)
    console.log(result.data);
    this.setState({
      paymentMethodList: result ? result.data : [],
      isBankTransfer: true // debug
    })
    const transferMethod = result ? result.data.find(item => item.payment_name === "โอนเงินผ่านธนาคาร") : {}
    this.props.form.setFieldsValue({
      payment_method_id: transferMethod.id, // debug
    });
  }

  getStorePaymentBank = async () => {
    let result = await Axios.get(`/bank/${this.props.cartList[0].store_id}`)
    console.log(result.data);
    this.setState({
      bankList: result ? result.data : [],
    })
    // this.props.form.setFieldsValue({
    //   payment_bank_id: 1, // debug
    // });
  }

  getStoreBio = async () => {
    let result = await Axios.get(`/store_bio/${this.props.cartList[0].store_id}`)
    console.log(result.data);
    this.setState({
      storeBio: result ? result.data : {},
    })
  }

  calculatePrice = () => {
    const { cartList } = this.props
    const sumPrice = cartList.length
      ? cartList.reduce(
        (total, current) => (total += parseFloat(current.service_price)),
        0
      ).toFixed(2)
      : 0.0;
    const bookingPrice = (sumPrice * this.state.bookingPercent).toFixed(2)
    this.setState({
      sumPrice,
      bookingPrice
    })
  }

  componentDidMount = () => {
    this.getStorePaymentMethod()
    this.getStorePaymentBank()
    this.getStoreBio()
    this.calculatePrice()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      startDate,
      endDate
    } = this.props
    console.log(this.props)
    const {
      bookingPercent,
      paymentMethodList,
      bankList,
      endOpen,
      storeBio,
      sumPrice,
      bookingPrice
    } = this.state

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }

    return (
      <div style={{ margin: "2em" }}>
        {/* <div style={{ marginBottom: "2em" }}>
          <Row type="flex" justify="center">
            <Col xs={24} sm={14}>
              
            </Col>
          </Row>
        </div> */}
        <div>
          <Form onSubmit={this.handleSubmit} layout="horizontal" hideRequiredMark>
            <Row gutter={[8, 8]}>
              <Col xs={24}>
                <Form.Item label="ชำระเงินให้กับร้าน:" className={"formItemShowText justifyStart"} {...formItemLayout}>
                  <StoreBio
                    name={storeBio.store_name}
                    description={storeBio.store_description}
                    imageUrl={storeBio.profile_image_url}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="เริ่มฝากน้อง:" className={"formItemShowText"} {...formItemLayout}>
                  <strong>
                    {startDate ?
                      <DatePicker
                        disabled={true}
                        format="YYYY-MM-DD"
                        value={startDate}
                        placeholder="วันเริ่มต้น"
                        style={{ width: "100%" }}
                      />
                      : getFieldDecorator('startDate', this.state.configNotEmptyRule)(
                        <DatePicker
                          disabledDate={this.disabledStartDate}
                          format="YYYY-MM-DD"
                          // value={start_date}
                          placeholder="วันเริ่มต้น"
                          onChange={this.onStartChange}
                          onOpenChange={this.handleStartOpenChange}
                          style={{ width: "100%" }}
                        />
                      )}
                  </strong>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="รับน้องกลับ:" className={"formItemShowText"} {...formItemLayout}>
                  <strong>
                    {endDate ?
                      <DatePicker
                        disabled={true}
                        format="YYYY-MM-DD"
                        value={endDate}
                        placeholder="วันสิ้นสุด"
                        style={{ width: "100%" }}
                      />
                      : getFieldDecorator('endDate', this.state.configNotEmptyRule)(
                        <DatePicker
                          disabledDate={this.disabledEndDate}
                          format="YYYY-MM-DD"
                          // value={end_date}
                          placeholder="วันสิ้นสุด"
                          open={endOpen}
                          onChange={this.onEndChange}
                          onOpenChange={this.handleEndOpenChange}
                          style={{ width: "100%" }}
                        />
                      )}
                  </strong>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="ยอดชำระเงิน:" className={"formItemShowText"} {...formItemLayout}>
                  <strong>
                    {withCommas(sumPrice)} บาท
                  </strong>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="วิธีการชำระเงิน:" className={"formItemShowText"} {...formItemLayout}>
                  {getFieldDecorator('payment_method_id', this.state.configNotEmptyRule)(
                    <Select
                      placeholder="กรุณาเลือกวิธีการชำระเงิน"
                      disabled
                    >
                      {paymentMethodList.map(way => (
                        <Option key={way.id} value={way.id}>{way.payment_name}</Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              {this.state.isBankTransfer ?
                <Col xs={24}>
                  <Form.Item label="ธนาคาร:" className={"formItemShowText justifyStart"} {...formItemLayout}>
                    {getFieldDecorator('payment_bank_id', this.state.configNotEmptyRule)(
                      <Select
                        showSearch
                        className="doubleSizeSelect"
                        placeholder="กรุณาเลือกธนาคารที่โอนเงิน"
                      >
                        {bankList.map((item) => {
                          return (
                            <Option key={item.id} className="optionWithIcon justifyStart" value={item.id}>
                              {this.getBankIcon(item.bank_name)}
                              <div style={{ display: "inline-block", paddingLeft: "1em", lineHeight: "22px" }}>
                                <div>{item.bank_name}</div>
                                <div>{"ชื่อบัญชี: " + item.account_name}</div>
                                <div>{"หมายเลขบัญชี: " + item.account_number}</div>
                              </div>
                            </Option>
                          )
                        })}
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
                <Form.Item label="จำนวนเงินมัดจำที่ต้องจ่าย*:" className={"formItemShowText"} {...formItemLayout}>
                  <h1>
                    {withCommas(bookingPrice)} บาท
                  </h1>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <span style={{ color: "#666666" }}>{`* คำนวณค่ามัดจำ ${bookingPercent * 100}% จากยอดชำระเงิน`}</span>
              </Col>
              <Col xs={24}>
                <Form.Item className={"formItemButton"}>
                  <Button block size="large" type="primary" htmlType="submit">ยืนยันการทำรายการ</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ payment }) => ({
  cartList: payment.cart,
  startDate: payment.startDate,
  endDate: payment.endDate,
})

const mapDispatchToProps = {
  ...paymentAction
}

const WrappedPayment = Form.create({ name: 'payment_page_form' })(Payment);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedPayment)
