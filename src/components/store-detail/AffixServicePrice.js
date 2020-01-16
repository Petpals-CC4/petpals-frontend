import React, { Component } from "react";
import { Button, Drawer } from "antd";

class AffixServicePrice extends Component {
  state = {
    visible: false
  }

  handleShowDrawer = () => {
    console.log("object")
    this.setState({visible: true})
  }
  
  handleHideDrawer = () => {
    console.log("object")
    this.setState({visible: false})
  }

  render() {
    const {
      handleAffixServicePrice,
      totalPrice
    } = this.props;
    

    return (
      <>
        <Button
            block
            type="primary"
            onClick={this.handleShowDrawer}
            style={{position: "fixed", bottom: 0, zIndex: 999 }}
            >
            จอง
        </Button>
        <Drawer
          title="สรุปรายการ"
          placement="right"
          onClose={this.handleHideDrawer}
          visible={this.state.visible}
        >
          {handleAffixServicePrice()}
          ยอดรวม {totalPrice} บาท
          <Button type="primary" style={{ width: "100%" }} disabled={totalPrice <= 0}>
            ยืนยันการจอง
          </Button>
        </Drawer>
        </>
    );
  }
}

export default AffixServicePrice;
