import React, { Component } from "react";
import StoreBio from "../store-detail/store-info/StoreBio";
import { withRouter } from "react-router-dom";
import Axios from "../../utils/api.service";
import OrderLists from "./OrderLists";
import { Col, Row, message, Button } from "antd";

export class DashboardNanny extends Component {
  state = {
    storeBio: {},
    orderLists: [],
    orderActive: [],
    orderHistory: []
  };

  getStoreBio = async () => {
    try {
      let result = await Axios.get(`/store_bio`)
      console.log(result.data);
      this.setState({
        storeBio: result ? result.data : {},
      })
    } catch (error) {
      message.error("ไม่พบร้านค้า")
      this.props.history.push("/")
    }
  }

  getOrderList = async () => {
    try {
      let result = await Axios.get(`/order`);
      console.log(result.data)
      const orderLists = result ? result.data : []
      this.setState({
        orderLists,
        orderActive: orderLists.filter(order => [1, 2].indexOf(order.status_id) >= 0), // waiting_payment and waiting_verify
        orderHistory: orderLists.filter(order => [1, 2].indexOf(order.status_id) < 0),
      });
    } catch (error) {
      message.error("ไม่พบข้อมูล")
      // this.props.history.push("/")
    }
  };

  goTo = (link) => {
    this.props.history.push(link)
  }

  componentDidMount = () => {
    this.getStoreBio()
    this.getOrderList()
  };

  render() {
    const {
      storeBio,
      orderActive,
      orderHistory
    } = this.state;

    return (
      <Row
        type="flex"
        justify="space-between"
        style={{ flexDirection: "column", height: "100%", margin: "2em" }}
      >
        <Col className="justifyEnd">
          <Button icon="edit" onClick={() => this.goTo("/store_detail/edit")}>แก้ไขรายละเอียดร้าน</Button>
        </Col>
        <Col>
          <StoreBio
            name={storeBio.store_name}
            description={storeBio.store_description}
            imageUrl={storeBio.profile_image_url}
          />
        </Col>
        <Col>
          <OrderLists title="รายการปัจจุบัน" data={orderActive} />
        </Col>
        <Col>
          <OrderLists title="ประวัติรายการ" data={orderHistory} />
        </Col>
      </Row>
    );
  }
}

export default withRouter(DashboardNanny);
