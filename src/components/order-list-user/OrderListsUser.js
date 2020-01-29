import React, { Component } from "react";
import { Table, Col, Typography, Row, Tag, Dropdown, Menu, Icon } from "antd";
import { datetimeFormat, withCommas } from "../../utils";
import Axios from "../../utils/api.service";

export class OrderListsUser extends Component {
  state = {
    data: [],
    columns: [
      {
        title: "เลขที่รายการ",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "วันที่ทำรายการ",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (date) => {
          return datetimeFormat(date)
        }
      },
      {
        title: "ชื่อร้านค้า",
        key: "store",
        dataIndex: "store",
        render: (store) => {
          return <span>
            {store.store_name}
          </span>
        }
      },
      {
        title: "ราคาเต็ม (บาท)",
        key: "total_price",
        dataIndex: "total_price",
        render: (price) => {
          return <span>
            {withCommas(price)}
          </span>
        }
      },
      {
        title: "ราคามัดจำ (บาท)",
        key: "booking_price",
        dataIndex: "booking_price",
        render: (price) => {
          return <span>
            {withCommas(price)}
          </span>
        }
      },
      {
        title: "สถานะรายการ",
        dataIndex: "order_status.status_name",
        key: "order_status.status_name",
        render: (status_name) => {
          return status_name === "waiting_payment" ?
            <Tag color="gold">{"รอการชำระเงิน"}</Tag>
            : status_name === "waiting_verify" ?
              <Tag color="volcano">{"รอร้านค้ายืนยัน"}</Tag>
              : status_name === "cancelled" ?
                <Tag color="red">{"ยกเลิกออเดอร์"}</Tag>
                : status_name === "completed" ?
                  <Tag color="green">{"ออเดอร์สำเร็จ"}</Tag>
                  : status_name !== "" && <Tag color="cyan">{status_name}</Tag>
        }
      },
      {
        title: "",
        key: "action",
        render: (object) => {
          // console.log(object);
          const status = object.order_status.status_name
          return (
            status === "waiting_payment" ?
              <Dropdown.Button
                // disabled={object.order_status.status_name !== "waiting_verify"}
                onClick={this.handleApproveOrder(object.id)}
                overlay={
                  <Menu>
                    <Menu.Item
                      key="stop"
                      onClick={this.handleRejectOrder(object.id)}
                      style={{
                        backgroundColor: "crimson",
                        color: "white",
                      }}>
                      <Icon type="stop" />
                      ยกเลิกออเดอร์
                    </Menu.Item>
                  </Menu>
                }
                type="primary"
              >
                อัพโหลดหลักฐานการชำระเงิน
              </Dropdown.Button>
              : null
          )
        }
      },
    ]
  };

  handleApproveOrder = (id) => (e) => {
    console.log(id);
  }

  handleRejectOrder = (id) => (e) => {
    console.log(id);
  }

  getOrderList = async () => {
    let result = await Axios.get(`/order`);
    console.log(result.data);
    this.setState({
      data: result ? result.data : []
    });
  };

  componentDidMount = () => {
    this.getOrderList()
  }

  render() {
    const {
      columns,
      data
    } = this.state

    console.log(data)

    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ flexDirection: "column", height: "100%" }}
      >
        <Col span={24}>
          <Typography.Title
            level={3}
            ellipsis
            className="textCenter"
            style={{
              color: "#0F4C81",
            }}
          >
            รายการออเดอร์
          </Typography.Title>
        </Col>
        <Col span={24} className="textCenter">
          <Table
            rowKey="id"
            dataSource={data}
            columns={columns}
          />
        </Col>
      </Row>
    );
  }
}
export default OrderListsUser;
