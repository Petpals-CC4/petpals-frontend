import React, { Component } from "react";
import { Layout, Card, Checkbox, Affix, Button } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

export class StoreServices extends Component {
  state = {
    service: [
      {
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "2,000"
      },
      {
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "3,000"
      },
      {
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "5,500"
      }
    ],
    total_price: ""
  };

  render() {
    return (
      <Layout>
        {this.state.service.map(s => (
          <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
            <Checkbox value={s.service_price}>
              <Card>
                <h4 style={{ color: "#1DE1EE" }}>{s.service_name}</h4>
                <h5 style={{ color: "#1DE1EE" }}>รายละเอียดเพิ่มเติม</h5>
                <p style={{ color: "#1DE1EE" }}>{s.service_description}</p>
                <br />
                <h5 style={{ color: "#1DE1EE" }}>ราคา {s.service_price} บาท</h5>
              </Card>
            </Checkbox>
          </Checkbox.Group>
        ))}
      </Layout>
    );
  }
}

export default StoreServices;
