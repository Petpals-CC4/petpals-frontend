import React, { Component } from "react";

import StoreBio from "../components/store-detail/store-info/StoreBio"
import EditStoreAddress from "../components/store-detail-edit/EditStoreAddress";
import EditStoreService from "../components/store-detail-edit/EditStoreService";
import EditStoreBank from "../components/store-detail-edit/EditStoreBank";
import FooterZone from "../components/landing/FooterZone";

import Axios from "../utils/api.service";
import GoBackButton from "../components/utils/GoBackButton";
import { message } from "antd";

class StoreDetailEditPage extends Component {
  state = {
    store_name: "",
    store_description: "",
    profile_image_url: "",
  }

  getBio = async () => {
    let result = await Axios.get('/store_bio')
    if (result) {
      const resultData = result.data
      console.log(resultData);
      this.setState({
        store_name: resultData.store_name,
        store_description: resultData.store_description,
        profile_image_url: resultData.profile_image_url,
      });
    }
  };

  updateBio = async (obj) => {
    try {
      let result = await Axios.put('/store', obj)
      console.log(result.data);
      message.success("แก้ไขสำเร็จ")
      this.getBio();
    } catch (error) {
      message.error("แก้ไขไม่สำเร็จ กรุณาลองใหม่อีกครั้ง")
    }
  };

  componentDidMount = () => {
    this.getBio();
  };

  render() {
    const {
      store_name,
      store_description,
      profile_image_url
    } = this.state
    return (
      <>
        <GoBackButton goTo="/store_dashboard" />
        <div style={{ marginTop: "6em" }}>
          <StoreBio
            name={store_name}
            description={store_description}
            imageUrl={profile_image_url}
            isEditable={true}
            updateAPI={this.updateBio}
          />
        </div>

        <EditStoreAddress />
        <EditStoreService />
        <EditStoreBank />
        <FooterZone />
      </>
    );
  }
}

export default StoreDetailEditPage;
