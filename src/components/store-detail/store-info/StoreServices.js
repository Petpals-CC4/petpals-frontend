import React, { Component } from "react";
import { Layout, Card } from "antd";

export class StoreServices extends Component {
  state = {
    service: [
      {
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "3,000"
      },
      {
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "3,000"
      },
      {
        service_name: "อาบน้ำน้อง",
        service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
        service_price: "3,000"
      }
    ]
  };
  render() {
    return (
      <Layout>
        {this.state.service.map(s => (
          <Card>
            <h4 style={{color:"#1DE1EE"}}>{s.service_name}</h4>
            <h5 style={{color:"#1DE1EE"}}>รายละเอียดเพิ่มเติม</h5>
            <p style={{color:"#1DE1EE"}}>{s.service_description}</p>
            <br />
            <h5 style={{color:"#1DE1EE"}}>ราคา {s.service_price} บาท</h5>
          </Card>
        ))}
      </Layout>
    );
  }
}

export default StoreServices;
