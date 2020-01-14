import React, { Component } from "react";
import { Layout, Card } from "antd";

export class StoreServices extends Component {
  state = {
    service: 
      [{service_name: "อาบน้ำน้อง",
      service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
      service_price: "3,000"},
      {service_name: "อาบน้ำน้อง",
      service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
      service_price: "3,000"},
      {service_name: "อาบน้ำน้อง",
      service_description: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
      service_price: "3,000"}]
    
  };
  render() {
    return (
      <Layout>
        {this.state.service.map( s => (
<Card>
          <h1>{s.service_name}</h1>
          <p>รายละเอียดเพิ่มเติม{s.ServiceDescription}</p>
          <br/>
          <br/>
          <p>ราคา {s.ServicePrice} บาท</p>
        </Card>
        ))}
        
      </Layout>
    );
  }
}

export default StoreServices;
