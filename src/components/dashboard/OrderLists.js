import React, { Component } from "react";
import { Table, Col, Typography, Row, Tag, Dropdown, Menu, Icon, message, Button } from "antd";
import { datetimeFormat } from "../../utils";
import Axios from "../../utils/api.service";
import ViewOrderDetailDrawer from "./ViewOrderDetailDrawer";

export class OrderLists extends Component {
  state = {
    visibleViewOrder: false,
    focusOrder: {},
    columns: [
      {
        title: "เลขที่รายการ",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "วันที่สั่ง",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (date) => {
          return datetimeFormat(date)
        }
      },
      {
        title: "ชื่อลูกค้า",
        key: "user",
        dataIndex: "user",
        render: (user) => {
          try {
            return <span>
              {user.firstname + " " + user.lastname}
            </span>
          } catch (error) {
            return <span>

            </span>
          }
        }
      },
      {
        title: "เบอร์โทรศัพท์",
        key: "phone",
        dataIndex: "user.phone"
      },
      {
        title: "สถานะรายการ",
        dataIndex: "order_status.status_name",
        key: "order_status.status_name",
        render: (status_name) => {
          return status_name === "waiting_payment" ?
            <Tag color="gold">{"รอการชำระเงิน"}</Tag>
            : status_name === "waiting_verify" ?
              <Tag color="volcano">{"รอการยืนยัน"}</Tag>
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
          return (
            object.order_status.status_name !== "waiting_verify" ?
              <Button
                onClick={this.handleOpenViewOrder(object)}
                type="primary"
              >
                ดูรายละเอียด
            </Button>
              :
              <Dropdown.Button
                onClick={this.handleOpenViewOrder(object)}
                overlay={
                  <Menu>
                    <Menu.Item
                      key="approve"
                      onClick={this.handleApproveOrder(object.id)}
                      style={{
                        backgroundColor: "#0F4C81",
                        color: "white",
                      }}>
                      <Icon type="check" />
                      อนุมัติออเดอร์
                  </Menu.Item>
                    <Menu.Item
                      key="reject"
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
                ดูรายละเอียด
            </Dropdown.Button>
          )
        }
      },
    ]
  };

  handleOpenViewOrder = (order) => (e) => {
    console.log(e);
    this.setState({
      visibleViewOrder: true,
      focusOrder: order
    })
  }

  handleCloseViewOrder = (e) => {
    console.log(e);
    this.setState({ visibleViewOrder: false })
  }

  handleApproveOrder = (order_id) => async (e) => {
    try {
      let result = await Axios.put(`/order_status/approve`, { order_id });
      console.log(result.data);
      message.success("ยืนยันออเดอร์สำเร็จ")
      this.props.refreshData()
    } catch (error) {
      message.error("ยืนยันออเดอร์ไม่สำเร็จ โปรดลองใหม่อีกครั้งในภายหลัง")
    }
  }

  handleRejectOrder = (order_id) => async (e) => {
    try {
      let result = await Axios.put(`/order_status/reject`, { order_id });
      console.log(result.data);
      message.success("ยกเลิกออเดอร์สำเร็จ")
      this.props.refreshData()
    } catch (error) {
      message.error("ยกเลิกออเดอร์ไม่สำเร็จ โปรดลองใหม่อีกครั้งในภายหลัง")
    }
  }

  render() {
    const {
      title,
      data
    } = this.props
    const {
      columns,
      visibleViewOrder,
      focusOrder
    } = this.state

    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ flexDirection: "column", height: "100%" }}
      >
        <Col span={24}>
          <Typography.Title level={4} ellipsis className="textCenter">
            {title}
          </Typography.Title>
        </Col>
        <Col span={24} className="textCenter">
          <Table
            rowKey="id"
            dataSource={data}
            columns={columns}
          />
        </Col>

        <ViewOrderDetailDrawer
          visible={visibleViewOrder}
          handleCloseDrawer={this.handleCloseViewOrder}
          orderDetail={focusOrder}
        />
      </Row>
    );
  }
}
export default OrderLists;
