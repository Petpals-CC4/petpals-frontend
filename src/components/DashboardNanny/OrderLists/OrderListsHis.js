import React, { Component } from "react";
import { Table, Col, Typography, Row } from "antd";
import axios from "../../../utils/api.service";

class OrderListsHis extends Component {
  state = {
    dataSource: [],
    columns: [
      {
        title: "วันที่สั่ง",
        dataIndex: "createAt",
        key: "createAt"
      },
      {
        title: "เลขที่รายการ",
        dataIndex: "order_no",
        key: "order_no"
      },
      {
        title: "ชื่อลูกค้า",
        dataIndex: "costomer_name",
        key: "costomer_name"
      },
      {
        title: "เบอร์โทรศัพท์",
        dataIndex: "phone_no",
        key: "phone_no"
      },
      {
        title: "รายละเอียดรายการ",
        dataIndex: "order_detail",
        key: "order_detail"
      }
    ]
  };
  componentDidMount = async () => {
    let result = await axios.get(`/order`);
    // console.log(result.data)
    this.setState({
      orderLists: result ? result.data : []
    });
  };
  render() {
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ flexDirection: "column", height: "100%",marginTop:"15px"}}
      >
        <Col span={24}>
          <Typography.Title level={4} ellipsis className="textCenter">
            รายการสำเร็จแล้ว
          </Typography.Title>
        </Col>
        <Col span={24} className="textCenter">
          <Table
            dataSource={this.state.orderLists}
            columns={this.state.columns}
          />
        </Col>
      </Row>
    );
  }
}
export default OrderListsHis;

