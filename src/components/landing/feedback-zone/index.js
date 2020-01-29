import React, { Component } from 'react'
import { Card, Row, Typography, Col } from 'antd'

class FeedbackZone extends Component {
  render() {
    const {
      feedbacks
    } = this.props
    // console.log(feedbacks)
    return (
      <div id="feedback" style={{ margin: "1.2em 1.6em", padding: "0px 8px" }}>
        <div className="text" style={{ marginBottom: "1em", textAlign: "center" }}>เสียงตอบรับจากลูกค้าของเรา</div>
        <Row type="flex" gutter={[16, 16]} style={{ flexWrap: "nowrap", overflowX: "auto" }}>
          {feedbacks.map(item => {
            return (
              <Col xs={20} sm={16} md={10} key={item.storeName}>
                <Card
                  hoverable
                  className="quote-feedback"
                  style={{ height: "100%" }}
                >
                  <div className="store-name">{item.storeName}</div>
                  <div className="point">{item.rating}</div>
                  <Typography.Paragraph ellipsis={{ rows: 5 }} className="comment">
                    {item.comment}
                  </Typography.Paragraph>
                  <div className="customer"> – {item.customerName}</div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default FeedbackZone
