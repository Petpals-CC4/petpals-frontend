import React, { Component } from 'react'
import { Drawer, Col, Row } from 'antd';
import { dateFormat, withCommas } from '../../utils';

import OrderProgress from './OrderProgress'

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title ? `${title}:` : ""}
    </p>
    {content}
  </div>
);

class ViewOrderDetailDrawer extends Component {
  render() {
    const {
      visible,
      handleCloseDrawer,
      orderDetail
    } = this.props

    return (
      <Drawer
        placement="right"
        width="350px"
        closable={true}
        onClose={handleCloseDrawer}
        visible={visible}
        title="รายละเอียดออเดอร์"
      >
        <Row>
          <Col span={24}>
            <OrderProgress
              current={orderDetail.status_id ? orderDetail.status_id - 1 : null}
              isCompleted={orderDetail.status_id ? orderDetail.status_id - 1 !== 4 : true}
            />
          </Col>
        </Row>
        <p style={pStyle}>รายละเอียดการโอนเงิน</p>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="รูปภาพสลิปโอนเงิน"
              content={
                orderDetail.slip_image ?
                  <a href={orderDetail.slip_image}>
                    <img src={orderDetail.slip_image} alt="slip_image" style={{ width: "100%" }} />
                  </a>
                  : null
              }
            />
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col>
            <DescriptionItem title={`วันที่โอนเงิน`} />
          </Col>
          <Col>
            <DescriptionItem content={orderDetail.slip_upload_date ? `${dateFormat(orderDetail.slip_upload_date)} ${orderDetail.slip_upload_time ? orderDetail.slip_upload_time : ""}` : null} />
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col>
            <DescriptionItem title={`ประเภทการชำระเงิน`} />
          </Col>
          <Col>
            <DescriptionItem content={`${orderDetail.payment_method ? orderDetail.payment_method.payment_name : null}`} />
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col>
            <DescriptionItem title={`บัญชีธนาคาร`} />
          </Col>
          <Col>
            <DescriptionItem content={orderDetail.bank ?
              <span style={{ display: "inline-block", textAlign: "end" }}>
                <span>{orderDetail.bank.bank_name}</span> <br />
                <span>{orderDetail.bank.account_name}</span> <br />
                <span>{orderDetail.bank.account_number}</span>
              </span>
              : null} />
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col>
            <DescriptionItem title={`ผู้ซื้อ`} />
          </Col>
          <Col>
            <DescriptionItem content={orderDetail.user ?
              <span style={{ display: "inline-block", textAlign: "end" }}>
                <span>{orderDetail.user.firstname} {orderDetail.user.lastname}</span> <br />
                <span>({orderDetail.user.phone})</span>
              </span>
              : null} />
          </Col>
        </Row>
        <p style={pStyle}>รายละเอียดบริการ</p>
        <Row type="flex" justify="space-between">
          <Col>
            <DescriptionItem title={`วันที่ใช้บริการ`} />
          </Col>
          <Col>
            <DescriptionItem content={
              `
                ${orderDetail.start_date ? dateFormat(orderDetail.start_date) : null}
                ~
                ${orderDetail.end_date ? dateFormat(orderDetail.start_date) : null}
                `
            } />
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col>
            <DescriptionItem title={`ค่าบริการ`} />
          </Col>
          <Col>
            <DescriptionItem content={orderDetail.total_price ? `${withCommas(orderDetail.total_price)} บาท` : null} />
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col>
            <DescriptionItem title={`ค่ามัดจำ`} />
          </Col>
          <Col>
            <DescriptionItem content={orderDetail.booking_price ? `${withCommas(orderDetail.booking_price)} บาท` : null} />
          </Col>
        </Row>
        <p style={pStyle}>บริการที่เลือก</p>
        <Row>
          {orderDetail.services && orderDetail.services.length ?
            orderDetail.services.map(service => (
              <Col span={24} key={service.service_name}>
                <Row type="flex" justify="space-between">
                  <Col>
                    <DescriptionItem title={`- ${service.service_name}`} />
                  </Col>
                  <Col>
                    <DescriptionItem content={`${withCommas(service.service_price)} บาท`} />
                  </Col>
                </Row>
              </Col>
            ))
            : null
          }
        </Row>
      </Drawer>
    )
  }
}

export default ViewOrderDetailDrawer
