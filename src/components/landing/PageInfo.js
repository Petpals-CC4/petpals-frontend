import React, { Component } from "react";
import { Divider } from "antd";
import CarouselSlider from "./CarouselSlider"
import "./Info.css"

class PageInfo extends Component {
  state = {
    exampleFeedback: [
      {
        id: 1,
        store_name: "ร้าน Groom your pals",
        store_location: "กรุงเทพ เขตบางรัก",
        store_service: "บริการตัดขนของร้าน สะอาด เรียบร้อย แฮปปี้ มากๆ :>",
        customer_name: "- Sudarat Chinchange"
      },
      {
        id: 2,
        store_name: "ร้าน Groom your pals",
        store_location: "กรุงเทพ เขตบางรัก",
        store_service: "บริการตัดขนของร้าน สะอาด เรียบร้อย แฮปปี้ มากๆ :>",
        customer_name: "- Sudarat Chinchange"
      },
    ]
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div className="text" style={{ margin: "1.2em 0px", padding: "0px 8px" }}>
            ค้นหาบริการที่ดีที่สุดเพื่อเพื่อนเเสนรักของคุณ <br />
            จากผู้ให้บริการมืออาชีพ
          </div>

          <CarouselSlider />

          <div className="text" style={{ margin: "1.2em 0px", padding: "0px 8px" }}>
            เสียงตอบรับจากลูกค้าของเรา
          </div>

          {this.state.exampleFeedback.map(item => {
            return (
              <div key={item.id} style={{ padding: "0px 8px" }}>
                <div className="point">{item.store_name}</div>
                <div className="aodetail">{item.store_location}</div>
                <div className="moc">{item.store_service}</div>
                <div className="aodetail" style={{ padding: "8px" }}>{item.customer_name}</div>
                <Divider />
              </div>
            )
          })}
        </div>

        <div className="text" style={{ textAlign: "center" }}>ค้นหาเลย</div>
      </div>
    )
  }
}

export default PageInfo
