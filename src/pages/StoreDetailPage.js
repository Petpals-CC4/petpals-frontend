import React, { Component } from "react";
import { connect } from 'react-redux'
import { Layout, Typography } from "antd";
import { actions as paymentAction } from "../redux/reducers/payment";
// ------------------------------Component--------------------------------------------

import AffixServicePrice from "../components/store-detail/AffixServicePrice";
import StoreInfo from "../components/store-detail/StoreInfo";
import CarouselSlider from "../components/landing/CarouselSlider";
import FooterZone from "../components/landing/FooterZone";
import axios from "../utils/api.service";

class StoreDetailPage extends Component {
  state = {
    storeData: {},
    checkedServices: []
  };

  handleClickService = value => () => {
    // console.log(value)
    let newCheckedServices = [...this.state.checkedServices];
    let isFound = this.state.checkedServices.find(
      service => service.id === value.id
    );
    if (!isFound) {
      if (this.state.checkedServices.some(service => service.store_id !== value.store_id)) {
        // eslint-disable-next-line no-restricted-globals
        let isChangedStore = confirm("คุณต้องการเปลี่ยนร้านค้าใช่หรือไม่ ตะกร้าสินค้าร้านเดิมจะถูกลบทิ้ง")
        newCheckedServices = isChangedStore ? [value] : [...newCheckedServices]
      } else {
        newCheckedServices = [...this.state.checkedServices, value];
      }
    } else {
      newCheckedServices = this.state.checkedServices.filter(
        service => service.id !== value.id
      );
    }
    // console.log(newCheckedServices);
    this.props.setCart(newCheckedServices)
    this.setState({
      checkedServices: newCheckedServices
    });
  };

  handleDeleteService = (id) => {
    this.setState((state) => ({
      checkedServices: state.checkedServices.filter(service => service.id !== id)
    }), () => {
      console.log(this.state.checkedServices);
      this.props.setCart(this.props.checkedServices)
    });
  }

  componentDidMount = async () => {
    let store_id = this.props.match.params.store_id ? this.props.match.params.store_id : this.props.store_id
    // console.log(store_id);
    if (!store_id) {
      this.props.history.push("/not_found")
    } else {
      let result = await axios.get(`/store/${store_id}`)
      // console.log(result.data)
      const { cartList } = this.props
      this.setState({
        storeData: result ? result.data : {},
        checkedServices: cartList
      })
    }
  }

  render() {
    return (
      <Layout>
        <div>
          <Typography.Title
            level={3}
            className="textCenter"
            style={{ marginTop: "10px" }}
          >
            ยินดีต้อนรับ
          </Typography.Title>
          <Typography.Title level={4} className="textCenter">
            เชิญเลือกบริการสำหรับน้องได้ที่นี่
          </Typography.Title>
        </div>
        <CarouselSlider images={this.state.storeData.store_images} />
        <StoreInfo
          storeData={this.state.storeData}
          handleClickService={this.handleClickService}
          checkedServices={this.state.checkedServices}
        />
        <FooterZone />
        {!this.props.store_id && <AffixServicePrice
          checkedServices={this.state.checkedServices}
          handleDelete={this.handleDeleteService}
        />}
      </Layout>
    );
  }
}

const mapStateToProps = ({ auth, payment }) => ({
  store_id: auth.store_id,
  role: auth.role,
  cartList: payment.cart
})

const mapDispatchToProps = {
  ...paymentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetailPage)
