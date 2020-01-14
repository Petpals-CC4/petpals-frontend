import React, { Component } from "react";
import { Layout, Card } from "antd";

export class StoreServices extends Component {
  state = {
    data: {
      ServiceName: "อาบน้ำน้อง",
      ServiceDescription: "อาบน้ำหมาด้วยแชมพูกำจัดเห็บพรีเมี่ยม",
      ServicePrice: "3,000"
    }
  };
  render() {
    return (
      <Layout>
        <Card>
          <h1>{this.state.data.ServiceName}</h1>
          <p>รายละเอียดเพิ่มเติม{this.state.data.ServiceDescription}</p>
          <br/>
          <br/>
          <p>ราคา {this.state.data.ServicePrice} บาท</p>
        </Card>
      </Layout>
    );
  }
}

export default StoreServices;
