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
      imgUrl,
      onClick // fn
    } = this.props

    const price = (services.length > 0 && services[0].service_price !== undefined) ? services[0].service_price : undefined

    return (
      <Card style={{ margin: "16px 0px", cursor: "pointer" }} onClick={onClick}>
        <Row gutter={32} type="flex" justify="center">
          <Col>
            <Row type="flex" justify="end" align="middle" style={{ marginBottom: "8px" }}>
              {imgUrl ?
                <Avatar src={imgUrl} size={64} />
                : <Avatar style={{ backgroundColor: '#0F4C81' }} icon="shop" size={64} />
              }
            </Row>
            <Row type="flex" justify="center" align="middle">
              <div className="justifyCenter">
                <img
                  src={boneIcon}
                  style={{ width: "1.3em", height: "1.3em" }}
                  alt="icon"
                />
                <strong style={{ marginLeft: "2px", fontSize: "1.3em" }}>
                  {parseFloat(score).toFixed(1)}
                </strong>
              </div>
            </Row>
          </Col>
          <Col xs={{ span: 18 }}>
            <Row>
              <Typography.Title level={4} ellipsis={{ rows: 1 }} style={{ margin: 0 }}>
                <strong>{name}</strong>
              </Typography.Title>
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
