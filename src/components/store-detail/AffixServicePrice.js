import React, { Component } from "react";
import { Affix, Button, Drawer } from "antd";

class AffixServicePrice extends Component {
  render() {
    const {
      handleAffixServicePrice,
      onClose,
      showDrawer,
      visible
    } = this.props;
    return (
      <>
        <Affix offsetTop={10} onChange={affixed => console.log(affixed)}>
          <Button type="primary" style={{ width: "100%" }} onClick={showDrawer}>
            จอง
          </Button>
        </Affix>
        <Drawer
          title="สรุปรายการ"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          {handleAffixServicePrice()}
          <Button type="primary" style={{ width: "100%" }}>
            ยืนยันการจอง
          </Button>
        </Drawer>
        </>
    );
  }
}

export default AffixServicePrice;
