import React, { Component } from 'react'
import { Divider } from 'antd'

class FeedbackZone extends Component {
  render() {
    const {
      feedback
    } = this.props
    return (
      <div id="feedback" className="text" style={{ textAlign: "center", margin: "1.2em 0px", padding: "0px 8px" }}>
        เสียงตอบรับจากลูกค้าของเรา
        {feedback ? feedback.map(item => {
            return (
              <div key={item.id} style={{ padding: "0px 8px" }}>
                <div className="point">{item.store_name}</div>
                <div className="aodetail">{item.store_location}</div>
                <div className="moc">{item.store_service}</div>
                <div className="aodetail" style={{ padding: "8px" }}>{item.customer_name}</div>
                <Divider />
              </div>
            )
          }) : ""
        }
        </div>
    )
  }
}

export default FeedbackZone
