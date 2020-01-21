import React, { Component } from 'react'
import { Row, Avatar, Col, Typography, Card, Button } from 'antd'

import boneIcon from "../../../images/boneicon2.png"

import { withCommas } from "../../../utils"

class SearchStoreCard extends Component {
  state = {
    imgUrl: ""
  }
  render() {
    const {
      name,
      description,
      score,
      services,
      price,
      imgUrl,
      onClick // fn
    } = this.props

    return (
      <Card style={{ margin: "16px 0px", cursor: "pointer" }} onClick={onClick}>
        <Row gutter={16} type="flex" justify="center">
          <Col>
            <Row type="flex" justify="end" align="middle" style={{ marginBottom: "8px" }}>
              {imgUrl ?
                <Avatar src={imgUrl} size="large" />
                : <Avatar style={{ backgroundColor: '#0F4C81' }} icon="shop" size="large" />
              }
            </Row>
            <Row type="flex" justify="end" align="middle">
              <img
                src={boneIcon}
                style={{ width: "15px", height: "15px" }}
                alt="icon"
              />
              <strong style={{ marginLeft: "2px" }}>{parseFloat(score).toFixed(1)}</strong>
            </Row>
          </Col>
          <Col xs={{span: 17, offset: 1}}>
            <Row>
              <Typography.Paragraph ellipsis={{ rows: 1 }} style={{ margin: 0 }}>
                <strong>{name}</strong>
              </Typography.Paragraph>
            </Row>
            <Row>
              <Typography.Paragraph ellipsis={{ rows: 2 }}>
                {description}
              </Typography.Paragraph>
            </Row>
            <Row gutter={[4, 4]} type="flex">{services.map(item => (
                <Col key={item.id}>
                  <Button type="primary" shape="round" size="small">{item.service_name}</Button>
                </Col>
              ))}</Row>
            {price ? <Row style={{ textAlign: "right", marginTop: "1em" }}>ราคาเริ่มต้น <strong>{withCommas(parseFloat(price).toFixed(2))}</strong> บาท</Row> : ""}
          </Col>
        </Row>
      </Card>
    )
  }
}

export default SearchStoreCard
