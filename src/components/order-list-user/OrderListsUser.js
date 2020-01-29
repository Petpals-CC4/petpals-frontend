import React, { Component } from "react";
import { Table, Col, Typography, Row, Tag, Dropdown, Menu, Icon, message, Button } from "antd";
import { datetimeFormat, withCommas } from "../../utils";
import Axios from "../../utils/api.service";
import { withRouter } from "react-router-dom";

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
        render: (status_name, object) => {
          return status_name === "waiting_payment" ?
            <Tag color="gold">{"รอการชำระเงิน"}</Tag>
            : status_name === "waiting_verify" ?
              <Tag color="volcano">{"รอร้านค้ายืนยัน"}</Tag>
              : status_name === "cancelled" ?
                <Tag color="red">{"ยกเลิกออเดอร์"}</Tag>
                : status_name === "completed" && object.feedback === null ?
                  <Tag color="green">{"รอการรีวิว"}</Tag>
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
                onClick={this.handleUploadOrder(object.id)}
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
              : status === "completed" && object.feedback === null ?
                <Button type="primary" icon="star" onClick={this.handleClickFeedback(object.id)}>ให้คะแนนร้านค้า</Button>
                : null
          )
        }
      },
    ]
  };

  handleUploadOrder = (order_id) => (e) => {
    this.props.history.push(`/verify_payment/${order_id}`)
  }

  handleRejectOrder = (order_id) => async (e) => {
    try {
      let result = await Axios.put(`/order_status/reject`, { order_id });
      console.log(result.data);
      message.success("ยกเลิกออเดอร์สำเร็จ")
      this.getOrderList()
    } catch (error) {
      message.error("ยกเลิกออเดอร์ไม่สำเร็จ โปรดลองใหม่อีกครั้งในภายหลัง")
    }
  }

  handleClickFeedback = (order_id) => (e) => {
    this.props.history.push(`/feedback/${order_id}`)
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
export default withRouter(OrderListsUser);
