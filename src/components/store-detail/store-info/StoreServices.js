import React, { Component } from "react";
import { Layout, Card, Checkbox, Affix, Button, Row, Col } from "antd";

// function onChange(checkedValues) {
//   console.log("checked = ", checkedValues);
// }

export class StoreServices extends Component {
  state = {
    checkedServices: [],
    service: [
      {
        service_id: 1,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "2,000"
      },
      {
        service_id: 2,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "3,000"
      },
      {
        service_id: 3,
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "5,500"
      }
    ],
    total_price: ""
  };

  onChange = checkedValues => {
    console.log("checked = ", checkedValues);
    this.setState({
      checkedServices: checkedValues
    })
  };

  handleClickService = (value) => () => {
    let newCheckedServices = [...this.state.checkedServices]
    let isFound = this.state.checkedServices.find((service) => (service.service_id === value.service_id))
    if (!isFound) {
      newCheckedServices = [...this.state.checkedServices, value]
    } else {
      newCheckedServices = this.state.checkedServices.filter((service) => (service.service_id !== value.service_id))
    }
    console.log(newCheckedServices)
    this.setState({
      checkedServices: newCheckedServices
    })
  }

  render() {
    return (
      <Layout>
        <Checkbox.Group onChange={this.onChange} value={this.state.checkedServices}>
          {this.state.service.map(s => (
            <Card>
              <Row type="flex" gutter={16}>
                <Col><Checkbox value={s} checked={this.state.checkedServices.find((service) => (service.service_id === s.service_id))} /></Col>
                <Col onClick={this.handleClickService(s)}>
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
