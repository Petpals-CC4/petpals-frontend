import React, { Component } from "react";
import { Col, Row, Card } from "antd";

// -----------------------------------------Image-----------------------------------

import phoneIcon from "../../../images/phoneIcon.png";
import googleMap from "../../../images/googlemap.png";

export class StoreMaps extends Component {
  state = {
    data: {
      Address: "xx yyy cccc",
      User_Phone: "123495677"
    }
  };

  render() {
    return (
      <Row gutter={[8, 8]} type="flex" justify="center" align="middle">
        <Col>
          <Card
            style={{
              margin: "16px 0px",
              cursor: "pointer",
              borderRadius: "12px"
            }}
          >
            <Row gutter={[8, 8]} type="flex" justify="center" align="middle">
              <Col span={24} className="textCenter">
                <h3 className="textCenter">
                  Address: {this.state.data.Address}
                </h3>
                <h3 className="textCenter">
                  <img
                    src={phoneIcon}
                    alt="phoneIcon"
                    style={{ width: "15px", height: "15px" }}
                  />
                  &nbsp;
                  {this.state.data.User_Phone}
                </h3>
              </Col>
            </Row>
            <Row type="flex" justify="center" align="middle" gutter={[8, 8]}>
              <Col span={24}>
                <div className="setCenterImg">
                  <img
                    src={googleMap}
                    alt="googleMap"
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default StoreMaps;
