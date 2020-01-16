import React, { Component } from "react";
import { Layout, Card, Checkbox, Row, Col } from "antd";

// function onChange(checkedValues) {
//   console.log("checked = ", checkedValues);
// }

export class StoreServices extends Component {
  render() {
    const {
      onChange,
      handleClickService,
      service,
      checkedServices,
      total_price
    } = this.props;
    return (
      <Layout>
        <Checkbox.Group onChange={onChange} value={checkedServices}>
          {service.map(s => (
            <Card>
              <Row type="flex" gutter={16}>
                <Col>
                  <Checkbox
                    value={s}
                    checked={checkedServices.find(
                      service => service.service_id === s.service_id
                    )}
                  />
                </Col>
                <Col onClick={handleClickService(s)}>
                  <h4 style={{ color: "#1DE1EE" }}>{s.service_name}</h4>
                  <h5 style={{ color: "#1DE1EE" }}>รายละเอียดเพิ่มเติม</h5>
                  <p style={{ color: "#1DE1EE" }}>{s.service_description}</p>
                  <br />
                  <h5 style={{ color: "#1DE1EE" }}>
                    ราคา {s.service_price} บาท
                  </h5>
                </Col>
              </Row>
            </Card>
          ))}
        </Checkbox.Group>
      </Layout>
    );
  }
}

export default StoreServices;
