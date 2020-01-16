import React, { Component } from "react";
import { Layout, Table } from "antd";

// ------------------------------Component--------------------------------------------

import AffixServicePrice from "../components/store-detail/AffixServicePrice";
import StoreInfo from "../components/store-detail/StoreInfo";

const columns = [
  {
    title: "ชื่อบริการ",
    dataIndex: "service_name",
    key: "service_name"
  },
  {
    title: "ราคา",
    dataIndex: "service_price",
    key: "service_price "
  }
];

class StoreDetailPage extends Component {
  state = {
    checkedServices: [],
    service: [
      {
        service_id: 1,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "2,000"
      },
      {
        service_id: 2,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "3,000"
      },
      {
        service_id: 3,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "5,500"
      }
    ],
    total_price: "",
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = checkedValues => {
    console.log("checked = ", checkedValues);
    this.setState({
      checkedServices: checkedValues
    });
  };

  handleClickService = value => () => {
    let newCheckedServices = [...this.state.checkedServices];
    let isFound = this.state.checkedServices.find(
      service => service.service_id === value.service_id
    );
    if (!isFound) {
      newCheckedServices = [...this.state.checkedServices, value];
    } else {
      newCheckedServices = this.state.checkedServices.filter(
        service => service.service_id !== value.service_id
      );
    }
    console.log(newCheckedServices);
    this.setState({
      checkedServices: newCheckedServices
    });
  };

  handleAffixServicePrice = () => {
    return (
      <Table
        columns={columns}
        dataSource={this.state.checkedServices}
        pagination={false}
      ></Table>
    );
  };

  render() {
    return (
      <Layout>
        <AffixServicePrice
          handleAffixServicePrice={this.handleAffixServicePrice}
          onClose={this.onClose}
          showDrawer={this.showDrawer}
          visible={this.state.visible}
        />
        <StoreInfo
          onChange={this.onChange}
          handleClickService={this.handleClickService}
          service={this.state.service}
          checkedServices={this.state.checkedServices}
          total_price={this.state.total_price}
        />
      </Layout>
    );
  }
}

export default StoreDetailPage;
