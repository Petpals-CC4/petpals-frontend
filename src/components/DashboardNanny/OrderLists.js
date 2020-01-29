import React, { Component } from "react";
import { Table, Col, Typography, Row, Tag, Dropdown, Menu, Icon, message } from "antd";
import { datetimeFormat } from "../../utils";
import Axios from "../../utils/api.service";

export class OrderLists extends Component {
  state = {
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
          console.log(object);
          return (
            <Dropdown.Button
              disabled={object.order_status.status_name !== "waiting_verify"}
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
              อนุมัติออเดอร์
              </Dropdown.Button>
          )
        }
      },
    ]
  };

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
      columns
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
      </Row>
    );
  }
}
export default OrderLists;
