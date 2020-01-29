import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Button, Drawer, Table, Row, Col } from "antd";

import { withCommas } from "../../utils";
import { actions as paymentAction } from "../../redux/reducers/payment";

class AffixServicePrice extends Component {
  state = {
    visible: false,
    // cartItems: []
  };

  handleShowDrawer = () => {
    this.setState({ visible: true });
  };

  handleHideDrawer = () => {
    this.setState({ visible: false });
  };

  handleClick = () => {
    // this.props.setCart(this.props.checkedServices)
    this.props.history.push("/payment")
  }

  handleClickDelete = (id) => () => {
    this.props.handleDelete(id)
  }

  render() {
    const { checkedServices, cartList } = this.props
    // console.log("checkedServices", checkedServices);
    // console.log("cartList", cartList);

    const cartItems = checkedServices.length === 0 ? cartList : checkedServices
    // console.log(cartItems)

    const columns = [
      {
        title: "ชื่อบริการ",
        dataIndex: "service_name",
        key: "service_name"
      },
      {
        title: "ราคา",
        dataIndex: "service_price",
        key: "service_price",
        align: "right",
        render: price => {
          return (
            <span style={{ textAlign: "right" }}>{withCommas(price)} บาท</span>
          );
        }
      },
      {
        title: "",
        key: "actions",
        render: (_, serviceObj) => {
          return (
            <Button
              icon="delete"
              shape="circle"
              type="danger"
              ghost
              onClick={this.handleClickDelete(serviceObj.id)}
            />
          )
        }
      }
    ];

    const sumPrice = cartItems.length
      ? cartItems.reduce(
        (total, current) => (total += parseFloat(current.service_price)),
        0
      ).toFixed(2)
      : 0.0;

    return (
      <>
        <Button
          type="primary"
          onClick={this.handleShowDrawer}
          className="floatingButton"
          icon="shopping-cart"
        />

        <Drawer
          title="สรุปรายการ"
          placement="right"
          width={400}
          onClose={this.handleHideDrawer}
          visible={this.state.visible}
        >
          <Row>
            <Col span={24}>
              <Table
                rowKey={"id"}
                columns={columns}
                dataSource={cartItems}
                pagination={false}
              />
            </Col>
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: "2em" }}>
            <Col span={24}>
              <Row type="flex" justify="space-between">
                <Col style={{ fontSize: "1.8em" }}>ยอดรวม</Col>
                <Col style={{ fontSize: "1.8em" }}>{withCommas(sumPrice)} บาท</Col>
              </Row>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                style={{ width: "100%" }}
                disabled={sumPrice <= 0.0}
                onClick={this.handleClick}
              >
                ยืนยันการจอง
              </Button>
            </Col>
          </Row>
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = ({ payment }) => ({
  cartList: payment.cart
})

const mapDispatchToProps = {
  ...paymentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AffixServicePrice))
