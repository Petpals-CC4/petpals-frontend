import React, { Component } from "react";
import StoreBio from "../store-detail/store-info/StoreBio";
import { withRouter } from "react-router-dom";
import Axios from "../../utils/api.service";
import OrderLists from "./OrderLists/OrderLists";
import OrderListsHis from "./OrderLists/OrderListsHis";
import { Col, Row } from "antd";

export class DashboardNanny extends Component {
  state = {
    storeData: {}
  };

  componentDidMount = async () => {
    let result = await Axios.get(`/shopdetail/${this.props.match.params.id}`);
    // console.log(result.data)
    this.setState({
      storeData: result ? result.data : {}
    });
  };

  render() {
    const { storeData } = this.state;
    // console.log(storeData)

    return (
      <Row
        type="flex"
        justify="space-between"
        style={{ flexDirection: "column", height: "100%" }}
      >
        <Col>
          <StoreBio
            name={storeData.store_name}
            description={storeData.store_description}
            imageUrl={storeData.profile_image_url}
          />
        </Col>
        <Col>
          <OrderLists />
        </Col>
        <Col>
          <OrderListsHis />
        </Col>
      </Row>
    );
  }
}

export default withRouter(DashboardNanny);
