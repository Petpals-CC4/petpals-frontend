import React, { Component } from "react";

import { Row, Col, Typography, Button, Modal, message } from "antd";
import Axios from "../../../utils/api.service";

import CardStoreAddress from "./store-address/CardStoreAddress";
import AddStoreAddressDrawer from "./store-address/AddStoreAddressDrawer";

const { confirm } = Modal;
class StoreAddress extends Component {
  state = {
    addressLists: [],
    drawerAddVisible: false
  };

  handleOpenDrawer = drawer_name => e => {
    this.setState({
      [drawer_name]: true
    });
  };

  handleCloseDrawer = drawer_name => e => {
    this.setState({
      [drawer_name]: false
    });
  };

  createAddress = async obj => {
    try {
      let result = await Axios.post(`/address`, obj);
      console.log(result.data);
      message.success("เพิ่มที่อยู่สำเร็จ");
    } catch (error) {
      message.error("ไม่สามารถเพิ่มที่อยู่ได้");
    }

    this.getAddress();
    this.handleCloseDrawer("drawerAddVisible")();
  };

  getAddress = async () => {
    let result = await Axios.get(`/address`);
    // console.log(result.data);
    this.setState({
      addressLists: result ? result.data : []
    });
  };

  componentDidMount = () => {
    this.getAddress();
  };

  render() {
    const { addressLists } = this.state;
    return (
      <div style={{ margin: "2em" }}>
        <Typography.Title
          level={3}
          style={{
            color: "#0F4C81",
            textAlign: "center"
          }}
        >
          ที่อยู่พี่เลี้ยง
        </Typography.Title>
        <Button
          block
          type="primary"
          onClick={this.handleOpenDrawer("drawerAddVisible")}
          style={{ margin: "1em 0px" }}
        >
          เพิ่มที่อยู่
        </Button>

        <Row type="flex" gutter={[16, 16]}>
          {addressLists
            ? addressLists.map(addressLists => (
                <Col key={addressLists.id} xs={24} sm={12} md={8} xl={4}>
                  <CardStoreAddress
                    address_id={addressLists.id}
                    house_no={addressLists.house_no}
                    road={addressLists.road}
                    sub_district={addressLists.sub_district}
                    district={addressLists.district}
                    province={addressLists.province}
                    post_code={addressLists.post_code}
                  />
                </Col>
              ))
            : ""}
        </Row>

        <AddStoreAddressDrawer
          visible={this.state.drawerAddVisible}
          handleCloseDrawer={this.handleCloseDrawer("drawerAddVisible")}
          handleClickSave={this.createBank}
        />
      </div>
    );
  }
}

export default StoreAddress;

// state = {
//   storeAddress: [],
//   DrawerAddAddresVisible: false
// };

// OnDrawerAddAddresVisibleclose = () => {
//   this.setState({
//     DrawerAddAddresVisible: false
//   });
// };

// SetDrawerAddAddresVisible = () => {
//   this.setState({
//     DrawerAddAddresVisible: false
//   });
// };

// getAddress = async () => {
//   let result = await axios.get(`/address`);
//   console.log(result.data);
//   this.setState({
//     storeAddress: result ? result.data : []
//   });
// };

// handleaddress = () => {
//   return this.state.storeAddress.map(x => (
//     <Card>
//       <Row gutter={[8, 8]}>
//         <Col span={24}>
//           <p>
//             {x.house_no} ถนน{x.road}
//           </p>
//           <p>
//             เเขวง{x.sub_district} เขต{x.district}
//           </p>
//           <p>{x.province}</p>
//           <p>{x.post_code}</p>
//         </Col>
//         <Col span={24}>
//           <Button>แก้ไขที่อยู่</Button>
//           <Button
//             onClick={this.showDeleteConfirm()}
//             type="dashed"
//             block
//             style={{ color: "#cc0a0a", marginRight: "20px" }}
//           >
//             ลบที่อยู่
//           </Button>
//         </Col>
//       </Row>
//     </Card>
//   ));
// };

// render() {
//   return (
//     <Row
//       type="flex"
//       justify="center"
//       align="middle"
//       gutter={[16, 16]}
//       style={{ marginTop: "10px" }}
//     >
//       <Col span={24}>
//         <Typography.Title
//           level={4}
//           className="textCenter"
//           style={{ color: "#0F4C81" }}
//         >
//           ที่อยู่พี่เลี้ยง
//         </Typography.Title>
//         <Col span={24}>
//           <Button type="primary">เพิ่มที่อยู่ร้าน</Button>
//         </Col>
//       </Col>
//       <Col xs={24} xl={8}>
//         {this.handleaddress()}
//       </Col>

//       <Drawer>
//         <AddressStore />
//       </Drawer>
//     </Row>
//   );
// }
// }
