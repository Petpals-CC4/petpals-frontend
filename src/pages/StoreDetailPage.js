import React, { Component } from "react";
import { Layout } from "antd";

// ------------------------------Component--------------------------------------------

import AffixServicePrice from "../components/store-detail/AffixServicePrice";
import StoreInfo from "../components/store-detail/StoreInfo";
import CarouselSlider from "../components/landing/CarouselSlider";
import axios from "../utils/api.service";

class StoreDetailPage extends Component {
  state = {
    storeData: {},
    checkedServices: [],
    // service: [
    //   {
    //     service_id: 1,
    //     service_name: "อาบน้ำน้อง",
    //     service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
    //     service_price: "2000"
    //   },
    //   {
    //     service_id: 2,
    //     service_name: "อาบน้ำน้อง",
    //     service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
    //     service_price: "3000"
    //   },
    //   {
    //     service_id: 3,
    //     service_name: "อาบน้ำน้อง",
    //     service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
    //     service_price: "5500"
    //   }
    // ]
  };

  onChange = checkedValues => {
    // console.log("checked = ", checkedValues);
    this.setState({
      totalPrice: checkedValues.reduce((sum, curr) => (sum += parseFloat(curr.service_price)), 0.0),
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
    this.setState({
      checkedServices: newCheckedServices
    });
  };

  componentDidMount = async () => {
    let result = await axios.get(`/shopdetail/${this.props.match.params.id}`)
    // console.log(result.data)
    this.setState({
      storeData: result ? result.data : {}
    })
  }

  render() {
    return (
      <Layout>
        <CarouselSlider images={this.state.storeData.store_images}/>
        <StoreInfo
          storeData={this.state.storeData}
          onChange={this.onChange}
          handleClickService={this.handleClickService}
          checkedServices={this.state.checkedServices}
        />
        <AffixServicePrice
          checkedServices={this.state.checkedServices}
        />
      </Layout>
    );
  }
}

export default StoreDetailPage;
