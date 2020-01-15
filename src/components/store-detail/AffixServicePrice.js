import React, { Component } from "react";
import { Affix, Card, Button } from "antd";

class AffixServicePrice extends Component {
  state = {
    
  };
  render() {
    return (
      <Affix
        offsetTop={120}
        onChange={affixed => console.log(affixed)}
        style={{ position: "absolute", left: "50%" }}
      >
        <Card
          style={{
            borderRadius: "12px"
          }}
        >
          <Button type="primary" style={{ width: "100%" }}>
            จอง
          </Button>
        </Card>
      </Affix>
    );
  }
}

export default AffixServicePrice;
