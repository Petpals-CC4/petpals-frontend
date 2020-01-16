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
        service_price: "2000"
      },
      {
        service_id: 2,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "3000"
      },
      {
        service_id: 3,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "5500"
      }
    ],
    total_price: 0
  };

  onChange = checkedValues => {
    // console.log("checked = ", checkedValues);
    this.setState({
      total_price: checkedValues.reduce((sum, curr) => (sum += parseFloat(curr.service_price)), 0.0),
      checkedServices: checkedValues
    });
  };

  handleClickService = value => () => {
    // console.log(value)
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
    let total_price = newCheckedServices.reduce((sum, curr) => (sum += parseFloat(curr.service_price)), 0.0)
    // console.log(newCheckedServices);
    // console.log(total_price);
    this.setState({
      total_price: total_price,
      checkedServices: newCheckedServices
    });
  };

  handleAffixServicePrice = () => {
    return (
      <Table
        rowKey={"service_id"}
        columns={columns}
        dataSource={this.state.checkedServices}
        pagination={false}
      />
    );
  };

  render() {
    return (
      <Layout>
        <AffixServicePrice
          handleAffixServicePrice={this.handleAffixServicePrice}
          totalPrice={this.state.total_price}
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
