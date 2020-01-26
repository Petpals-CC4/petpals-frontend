import React, { Component } from 'react'
import { Row, Col, Button, Typography, message } from 'antd';
import Axios from "../../utils/api.service";

import { withRouter } from "react-router-dom";
import CardStoreService from './edit-store-service/CardStoreService';
import AddStoreServiceDrawer from './edit-store-service/AddStoreServiceDrawer';

export class EditStoreService extends Component {
  state = {
    serviceLists: [],
    drawerAddVisible: false
  }

  handleOpenDrawer = (drawer_name) => (e) => {
    this.setState({
      [drawer_name]: true
    });
  };

  handleCloseDrawer = (drawer_name) => (e) => {
    this.setState({
      [drawer_name]: false
    });
  };

  createService = async (obj) => {
    try {
      let result = await Axios.post(`/service`, obj)
      console.log(result.data);
      message.success("เพิ่มรายการสำเร็จ")
    } catch (error) {
      message.error("ไม่สามารถเพิ่มรายการได้")
    }

    this.getService();
    this.handleCloseDrawer("drawerAddVisible")()
  }

  getService = async () => {
    let result = await Axios.get(`/service`)
    // console.log(result.data);
    this.setState({
      serviceLists: result ? result.data : []
    });
  };

  componentDidMount = () => {
    this.getService();
  };

  render() {
    const { serviceLists } = this.state;
    return (
      <div style={{ margin: "2em" }}>
        <Typography.Title level={3}
          style={{
            color: "#0F4C81",
            textAlign: "center"
          }}
        >
          รายการบริการพี่เลี้ยง
        </Typography.Title>
        <Button
          block
          type="primary"
          onClick={this.handleOpenDrawer("drawerAddVisible")}
          style={{ margin: "1em 0px" }}
        >
          เพิ่มบริการ
        </Button>

        <Row
          type="flex"
          gutter={[16, 16]}
        >
          {serviceLists
            ? serviceLists.map(serviceList => (
              <Col
                key={serviceList.id}
                xs={24} sm={12} md={8} xl={4}
              >
                <CardStoreService
                  service_id={serviceList.id}
                  service_name={serviceList.service_name}
                  service_description={serviceList.service_description}
                  service_price={serviceList.service_price}
                  refreshService={this.getService}
                />
              </Col>
            ))
            : ""}
        </Row>

        <AddStoreServiceDrawer
          visible={this.state.drawerAddVisible}
          handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
          handleClickSave={this.createService}
        />
      </div>
    )
  }
}

export default withRouter(EditStoreService)
