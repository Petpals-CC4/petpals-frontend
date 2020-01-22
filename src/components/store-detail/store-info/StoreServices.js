import React, { Component } from "react";
import { Layout, Card, Checkbox, Row, Col } from "antd";
import { withCommas } from "../../../utils";

export class StoreServices extends Component {
  render() {
    const {
      onChange,
      services,
      checkedServices,
      handleClickService
    } = this.props;
    // console.log(services)
    return (
      <Layout>
        <Checkbox.Group onChange={onChange} value={checkedServices}>
          {services ? services.map((service) => (
            <Card key={service.id}>
              <Row type="flex" gutter={16}>
                <Col>
                  <Checkbox
                    value={service}
                    checked={checkedServices.find((service) => (service.service_id === service.id))}
                  />
                </Col>
                <Col onClick={handleClickService(service)}>
                  <h4 style={{ color: "#0F4C81" }}>{service.service_name}</h4>
                  <h5 style={{ color: "#0F4C81" }}>รายละเอียดเพิ่มเติม</h5>
                  <p style={{ color: "#0F4C81" }}>{service.service_description}</p>
                  <br />
                  <h5 style={{ color: "#0F4C81" }}>
                    ราคา {withCommas(service.service_price)} บาท
                  </h5>
                </Col>
              </Row>
            </Card>
          )) : ""
          }
        </Checkbox.Group>
      </Layout>
    );
  }
}

export default StoreServices;
