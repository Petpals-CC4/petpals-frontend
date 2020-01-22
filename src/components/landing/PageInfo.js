import React, { Component } from "react";
import { Divider } from "antd";
import CarouselSlider from "./CarouselSlider"
import "./Info.css"
import FeedbackZone from "./feedback-zone";
import AboutZone from "./about-zone";

class PageInfo extends Component {
  state = {
    images: [
      "/landing/slide-1.jpg",
      "/landing/slide-2.jpg",
    ],
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
        <div id="about" style={{ textAlign: "center", paddingTop: "64px" }}>
          <div className="point" style={{ margin: "1.2em 0px", padding: "0px 8px" }}>
            ค้นหาบริการที่ดีที่สุดเพื่อเพื่อนแสนรักของคุณ <br />
            จากผู้ให้บริการมืออาชีพ
          </div>
          <CarouselSlider images={this.state.images}/>
        </div>

        <AboutZone />
        <FeedbackZone feedback={this.state.exampleFeedback} />

        <div id="search" className="text" style={{ textAlign: "center" }}>
          มาหา Nanny ที่ตรงใจกันเลย
        </div>
      </div>
    )
  }
}

export default PageInfo
