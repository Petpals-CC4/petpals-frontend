import React, { Component } from "react";
import { Button, Drawer, Table } from "antd";
import { withCommas } from "../../utils";

class AffixServicePrice extends Component {
  state = {
    visible: false
  }

  handleShowDrawer = () => {
    console.log("object")
    this.setState({ visible: true })
  }

  handleHideDrawer = () => {
    console.log("object")
    this.setState({ visible: false })
  }

  render() {
    const {
      checkedServices
    } = this.props;

    // console.log(checkedServices)

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
        render: (price) => {
          return <span style={{ textAlign: "right" }}>{withCommas(price)} บาท</span>
        }
      }
    ];

    const sumPrice = checkedServices.length ?
      checkedServices.reduce((total, current) => total += parseFloat(current.service_price), 0)
      : 0.0

    return (
      <>
        <Button
          block
          type="primary"
          onClick={this.handleShowDrawer}
          style={{ position: "fixed", bottom: 0, zIndex: 999 }}
        >
          จอง
        </Button>
        <Drawer
          title="สรุปรายการ"
          placement="right"
          width={400}
          onClose={this.handleHideDrawer}
          visible={this.state.visible}
        >

          <Table
            rowKey={"id"}
            columns={columns}
            dataSource={checkedServices}
            pagination={false}
          />

          <div>
            ยอดรวม {withCommas(sumPrice)} บาท
          </div>
          <Button type="primary" style={{ width: "100%" }} disabled={sumPrice <= 0.0}>
            ยืนยันการจอง
          </Button>
        </Drawer>
      </>
    );
  }
}

export default AffixServicePrice;
