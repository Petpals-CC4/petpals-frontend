import React, { Component } from 'react'
import CardAbout from './CardAbout'
import { Row, Col } from 'antd'

export class AboutZone extends Component {
  render() {
    const contents = [
      {
        id: 1,
        title: "สะดวก",
        text: <div>
          ที่นี่เรามีสถานที่รับฝากน้องมากมายให้เลือกสรรค์
        </div>,
        imagePath: "/landing/detail-1.svg"
      },
      {
        id: 2,
        title: "สบาย",
        text: <div>
          เพื่อให้ตรงกับความต้องการของเหล่าป๊าม๊าของน้อง ทั้งการเลือกสถานที่และบริการ
        </div>,
        imagePath: "/landing/detail-2.svg"
      },
      {
        id: 3,
        title: "ไว้ใจได้",
        text: <div>
          ทั้งระบบมัดจำและระบบการจองที่สะดวก เข้าใจง่าย ทั้งผู้ฝากและรับฝาก
        </div>,
        imagePath: "/landing/detail-3.svg"
      },
    ]
    return (
      <div style={{ margin: "1.2em 0px", padding: "0px 8px" }}>
        <Row type="flex" justify="center" gutter={[32, 32]} style={{ margin: "3em" }}>
          {contents.map(content => {
            return (
              <Col key={content.id}>
                <CardAbout {...content} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default AboutZone
