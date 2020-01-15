import React, { Component } from 'react'
import { DatePicker, Button, Row, Col, Input } from 'antd'
const { RangePicker } = DatePicker
export class SearchInput extends Component {
  state = {
    guideText: ["ตัดขน", "อาบน้ำ", "ออกกำลังกาย"]
  }

  handleChange = (date, dateString) => {
    console.log(date, dateString)
  }

  render() {
    return (
      <div>
        {/* <span>Search Here!!</span> */}
        <Row gutter={8}>
          <Col xs={12}>
            <RangePicker onChange={this.handleChange} style={{ width: "100%" }} />
          </Col>
          <Col xs={12}>
            <Input onChange={this.handleChange} style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row type="flex" gutter={[8, 8]}>
          {this.state.guideText.map((text, index) => {
            return (
              <Col key={index}>
                <Button type="primary" shape="round">
                  {text}
                </Button>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default SearchInput
