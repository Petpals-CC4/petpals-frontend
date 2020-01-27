import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "../../utils/api.service";

import { Drawer, Card, Button, Row, Col, Modal, Typography, message } from "antd";

import CardStoreBank from './store-bank/CardStoreBank';

// import AddStoreServiceDrawer from './edit-store-service/AddStoreServiceDrawer';
// import AddStoreBank from "./store-bank/AddStoreBank";
// import EditStoreBank from "./store-bank/EditStoreBank";

const { confirm } = Modal;

class StoreBank extends Component {
  // state = {
  //   drawerVisible: false,
  //   drawerEditVisible: false
  // };

  // showUpdateConfirm = obj => {
  //   const me = this;
  //   confirm({
  //     title: "คุณยืนยันจะแก้ไขบัญชีธนาคารนี้ใช่หรือไม่?",
  //     okText: "ใช่",
  //     okType: "success",
  //     cancelText: "ไม่",
  //     onOk() {
  //       me.updateBank(obj);
  //     },
  //     onCancel() {
  //       console.log("Cancel");
  //     }
  //   });
  // };

  // updateBank = async obj => {
  //   console.log(obj);
  //   let result = await axios.put(`/bank/${this.props.match.params.id}`, obj);
  //   console.log(result.data);
  //   this.getBank();
  //   this.onEditDrawerclose();
  // };

  // showDeleteConfirm = id => () => {
  //   const me = this;
  //   confirm({
  //     title: "คุณยืนยันจะลบบัญชีธนาคารนี้ใช่หรือไม่?",
  //     okText: "ใช่",
  //     okType: "danger",
  //     cancelText: "ไม่",
  //     onOk() {
  //       me.deleteBank(id);
  //     },
  //     onCancel() {
  //       console.log("Cancel");
  //     }
  //   });
  // };

  // deleteBank = async id => {
  //   let result = await axios.delete(`/bank/${id}`, {
  //     data: {
  //       store_id: "1"
  //     }
  //   });
  //   console.log(result.data);
  //   this.getBank();
  // };

  // showDrawer = () => {
  //   this.setState({
  //     drawerVisible: true
  //   });
  // };
  // onDrawerclose = () => {
  //   this.setState({
  //     drawerVisible: false
  //   });
  // };

  // showEditDrawer = () => {
  //   this.setState({
  //     drawerEditVisible: true
  //   });
  // };
  // onEditDrawerclose = () => {
  //   this.setState({
  //     drawerEditVisible: false
  //   });
  // };

  state = {
    bankLists: [],
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

  componentDidMount = () => {
    this.getBank();
  };

  getBank = async () => {
    let result = await Axios.get(`/bank`);
    // console.log(result.data);
    this.setState({
      bankLists: result ? result.data : []
    });
  };

  render() {
    const { bankLists } = this.state;
    return (
      // <>
      //   <Row>
      //     <Col>
      //       <Row type="flex" justify="space-around" align="middle">
      //         <h1
      //           style={{
      //             fontSize: "20px",
      //             color: "#0F4C81",
      //             fontWeight: "900",
      //             paddingTop: "20px"
      //           }}
      //         >
      //           รายการบัญชีธนาคารพี่เลี้ยง
      //         </h1>
      //         <Button
      //           type="primary"
      //           block
      //           onClick={this.showDrawer}
      //           style={{ marginTop: "10px", marginBottom: "10px" }}
      //         >
      //           เพิ่มบัญชีธนาคาร
      //         </Button>
      //       </Row>
      //       <Row
      //         type="flex"
      //         gutter={[16, 32]}
      //       >
      //         {bankAccounts
      //           ? bankAccounts.map(bankAccount => (
      //               <Col xs={24} sm={12} md={8} xl={4} >
      //                 <Card
      //                   size="default"
      //                   key={bankAccount.id}
      //                   style={{
      //                     width: "100%",
      //                     marginBottom: "10px",
      //                     marginRight: "5px",
      //                     marginLeft: "5px",
      //                     borderRadius: "12px"
      //                   }}
      //                 >
      //                   <Row
      //                     gutter={[16, 16]}
      //                     type="flex"
      //                     justify="space-around"
      //                     align="middle"
      //                   >
      //                     <Col span={24}>
      //                       <h3>{bankAccount.bank_name}</h3>
      //                     </Col>
      //                     <Col span={24}>
      //                       <p>{bankAccount.account_name}</p>
      //                     </Col>
      //                     <Col span={24}>
      //                       <p>{bankAccount.account_number}</p>
      //                     </Col>
      //                   </Row>
      //                   <Row gutter={[16, 16]}>
      //                     <Col span={24}>
      //                       <Button
      //                         onClick={this.showDeleteConfirm(bankAccount.id)}
      //                         type="dashed"
      //                         block
      //                         style={{ color: "#cc0a0a", marginRight: "20px" }}
      //                       >
      //                         ลบบัญชีธนาคาร
      //                       </Button>
      //                     </Col>
      //                     <Col span={24}>
      //                       <Button
      //                         type="primary"
      //                         block
      //                         onClick={this.showEditDrawer}
      //                       >
      //                         แก้ไขบัญชีธนาคาร
      //                       </Button>
      //                     </Col>
      //                   </Row>
      //                 </Card>
      //               </Col>
      //             ))
      //           : ""}
      //       </Row>
      //     </Col>
      //   </Row>

      //   <Drawer
      //     placement="right"
      //     width="400px"
      //     closable={false}
      //     onClose={this.onDrawerclose}
      //     visible={this.state.drawerVisible}
      //     title="เพิ่มบัญชี"
      //   >
      //     <AddStoreBank />
      //   </Drawer>

      //   <Drawer
      //     placement="right"
      //     width="400px"
      //     closable={false}
      //     onClose={this.onEditDrawerclose}
      //     visible={this.state.drawerEditVisible}
      //     title="แก้ไขบัญชี"
      //   >
      //     <EditStoreBank showUpdateConfirm={this.showUpdateConfirm} />
      //   </Drawer>
      // </>
      <div style={{ margin: "2em" }}>
        <Typography.Title level={3}
          style={{
            color: "#0F4C81",
            textAlign: "center"
          }}
        >
          รายการบัญชีธนาคารพี่เลี้ยง
        </Typography.Title>
        <Button
          block
          type="primary"
          onClick={this.handleOpenDrawer("drawerAddVisible")}
          style={{ margin: "1em 0px" }}
        >
          เพิ่มบัญชีธนาคาร
        </Button>

        <Row
          type="flex"
          gutter={[16, 16]}
        >
          {bankLists
            ? bankLists.map(bankList => (
              <Col
                key={bankList.id}
                xs={24} sm={12} md={8} xl={4}
              >
                {console.log(bankList)}
                <CardStoreBank
                  service_id={bankList.id}
                  service_name={bankList.service_name}
                  service_description={bankList.service_description}
                  service_price={bankList.service_price}
                  refreshService={this.getService}
                />
              </Col>
            ))
            : ""}
        </Row>

        {/* <AddStoreServiceDrawer
          visible={this.state.drawerAddVisible}
          handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
          handleClickSave={this.createService}
        /> */}
      </div>
    );
  }
}

export default withRouter(StoreBank);
