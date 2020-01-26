import React, { Component } from "react";
import { Card, Checkbox, Row, Col, Typography } from "antd";
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
      <>
        <Row type="flex" justify="center" align="middle" gutter={[8, 8]}>
          <Col span={24}>
            <Typography.Title level={3} className="textCenter">
              กรุณาเลือกบริการสำหรับน้อง
            </Typography.Title>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" gutter={[8, 8]}>
          <Checkbox.Group onChange={onChange} value={checkedServices}>
            {services
              ? services.map(service => (
                <Col key={service.id} span={24}>
                  <Card
                    key={service.id}
                    style={{
                      margin: "0px 0px",
                      cursor: "pointer",
                      borderRadius: "12px",
                      width: "100%"
                    }}
                    onClick={handleClickService(service)}
                  >
                    <Row type="flex" gutter={16}>
                      <Col>
                        <Checkbox
                          value={service}
                          checked={checkedServices.find(
                            serviceItem => serviceItem.id === service.id
                          )}
                        />
                      </Col>
                      <Col onClick={handleClickService(service)}>
                        <Row type="flex" justify="center" align="middle">
                          <Col>
                            <h2 style={{ color: "#0F4C81" }}>
                              {service.service_name}
                            </h2>
                            <h5 style={{ color: "#0F4C81" }}>
                              รายละเอียดเพิ่มเติม
                              </h5>
                            <p style={{ color: "#0F4C81" }}>
                              {service.service_description}
                            </p>
                            <br />
                            <h5 style={{ color: "#0F4C81" }}>
                              ราคา {withCommas(service.service_price)} บาท
                              </h5>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))
              : ""}
          </Checkbox.Group>
        </Row>
      </>
    );
  }
}

export default StoreServices;
