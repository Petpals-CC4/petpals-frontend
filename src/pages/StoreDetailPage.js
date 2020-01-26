import React, { Component } from "react";
import { connect } from 'react-redux'
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
      service => service.id === value.id
    );
    if (!isFound) {
      newCheckedServices = [...this.state.checkedServices, value];
    } else {
      newCheckedServices = this.state.checkedServices.filter(
        service => service.id !== value.id
      );
    }
    this.setState({
      checkedServices: newCheckedServices
    });
  };

  componentDidMount = async () => {
    let store_id = this.props.match.params.store_id ? this.props.match.params.store_id : this.props.store_id
    console.log(store_id);
    if (!store_id) {
      this.props.history.push("/not_found")
    } else {
      let result = await axios.get(`/shop_detail/${store_id}`)
      // console.log(result.data)
      this.setState({
        storeData: result ? result.data : {}
      })
    }
  }

  render() {
    return (
      <Layout>
        <CarouselSlider images={this.state.storeData.store_images} />
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

const mapStateToProps = ({ auth }) => ({
  store_id: auth.store_id
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetailPage)
