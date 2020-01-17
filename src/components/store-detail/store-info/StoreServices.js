import React, { Component } from "react";
import { Layout, Card, Checkbox, Row, Col } from "antd";

export class StoreServices extends Component {
  render() {
    const {
      onChange,
      service,
      checkedServices,
      handleClickService
    } = this.props;
    return (
      <Layout>
        <Checkbox.Group onChange={onChange} value={checkedServices}>
          {service.map((s, service_index) => (
            <Card key={service_index}>
              <Row type="flex" gutter={16}>
                <Col>
                  <Checkbox
                    value={s}
                    checked={checkedServices.find((service) => (service.service_id === s.service_id))}
                    />
                </Col>
                <Col onClick={handleClickService(s)}>
                  <h4 style={{ color: "#0F4C81" }}>{s.service_name}</h4>
                  <h5 style={{ color: "#0F4C81" }}>รายละเอียดเพิ่มเติม</h5>
                  <p style={{ color: "#0F4C81" }}>{s.service_description}</p>
                  <br />
                  <h5 style={{ color: "#0F4C81" }}>
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
