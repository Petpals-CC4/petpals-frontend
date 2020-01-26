import React, { Component } from 'react'
import { Row, Col, Button, Card, Drawer, Modal } from 'antd';
import axios from "../../utils/api.service";

import AddStoreService from "./service-edit/AddStoreService"
import EditStoreServiceDrawer from "./service-edit/EditStoreServiceDrawer"
import { withRouter } from "react-router-dom";

const { confirm } = Modal;
export class EditStoreService extends Component {
  state = {
    drawerVisible: false,
    drawerEditVisible: false
  };

  showUpdateConfirm = obj => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะแก้ไขบริการนี้ใช่หรือไม่?",
      okText: "ยืนยัน",
      okType: "success",
      cancelText: "ยกเลิก",
      onOk() {
        me.updateService(obj);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  updateService = async obj => {
    console.log(obj);
    let result = await axios.put(`/service/${this.props.match.params.id}`, obj);
    console.log(result.data);
    this.getService();
    this.onEditDrawerclose();
  };

  showDeleteConfirm = id => (e) => {
    const me = this;
    confirm({
      title: "คุณยืนยันจะลบบริการนี้ใช่หรือไม่?",
      okText: "ใช่ ฉันจะลบ",
      okType: "danger",
      cancelText: "ยกเลิก",
      onOk() {
        me.deleteService(id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  deleteService = async id => {
    let result = await axios.delete(`/service/${id}`, {
      data: {
        store_id: ''
      }
    });
    console.log(result.data);
    this.getService();
  };

  showDrawer = () => {
    this.setState({
      drawerVisible: true
    });
  };
  onDrawerclose = () => {
    this.setState({
      drawerVisible: false
    });
  };

  showEditDrawer = () => {
    this.setState({
      drawerEditVisible: true
    });
  };
  onEditDrawerclose = () => {
    this.setState({
      drawerEditVisible: false
    });
  };

  componentDidMount = () => {
    this.getService();
  };

  getService = async () => {
    let result = await axios.get(`/service`)
    // console.log(result.data);
    this.setState({
      serviceLists: result ? result.data : []
    });
  };

  render() {
    const { serviceLists } = this.state;
    return (
      <>
        <Row>
          <Col>
            <Row type="flex" justify="space-around" align="middle">
              <h1
                style={{
                  fontSize: "20px",
                  color: "#0F4C81",
                  fontWeight: "900",
                  paddingTop: "20px"
                }}
              >
                รายการบริการพี่เลี้ยง
              </h1>
              <Button
                type="primary"
                block
                onClick={this.showDrawer}
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                เพิ่มบริการ
              </Button>
            </Row>
            <Row
              type="flex"
              gutter={[16, 32]}
            >
              {serviceLists
                ? serviceLists.map(serviceList => (
                  <Col key={serviceList.id} xs={24} sm={12} md={8} xl={4}>
                    <Card
                      size="default"
                      key={serviceList.id}
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        marginRight: "5px",
                        marginLeft: "5px",
                        borderRadius: "12px"
                      }}
                    >
                      <Row
                        gutter={[16, 16]}
                        type="flex"
                        justify="space-around"
                        align="middle"
                      >
                        <Col span={24}>
                          <h3>{serviceList.service_name}</h3>
                        </Col>
                        <Col span={24}>
                          <p>{serviceList.service_description}</p>
                        </Col>
                        <Col span={24}>
                          <p>{serviceList.service_price}</p>
                        </Col>
                      </Row>
                      <Row gutter={[16, 16]}>
                        <Col span={24}>
                          <Button
                            type="primary"
                            block
                            onClick={this.showEditDrawer}
                          >
                            แก้ไขบริการดูแลน้อง
                            </Button>
                        </Col>
                        <Col span={24}>
                          <Button
                            onClick={this.showDeleteConfirm(serviceList.id)}
                            type="dashed"
                            block
                            style={{ color: "#cc0a0a", marginRight: "20px" }}
                          >
                            ลบบริการ
                            </Button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))
                : ""}
            </Row>
          </Col>
        </Row>

        <Drawer
          placement="right"
          width="350px"
          closable={false}
          onClose={this.onDrawerclose}
          visible={this.state.drawerVisible}
          title="เพิ่มบริการ"
        >
          <AddStoreService />
        </Drawer>

        <Drawer
          placement="right"
          width="350px"
          closable={false}
          onClose={this.onEditDrawerclose}
          visible={this.state.drawerEditVisible}
          title="แก้ไขบริการ"
        >
          <EditStoreServiceDrawer showUpdateConfirm={this.showUpdateConfirm} />
        </Drawer>
      </>
    )
  }
}

export default withRouter(EditStoreService)
