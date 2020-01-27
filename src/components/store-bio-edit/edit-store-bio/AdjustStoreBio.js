import React, { Component } from 'react'
import axios from 'axios'
import { Card, Col, Row, Typography } from 'antd'


class AdjustStoreBio extends Component {
  render() {
    const {
      bio_storename,
      bio_description,
      bio_store_images
    } = this.props
    return (
      <>
        <Card
          style={{
            margin: "16px 0px",
            cursor: "pointer",
            borderRadius: "12px"
          }}
        >
          <Row gutter={[8, 8]} type="flex">
            <Col span={18}>
              <Row>
                <Typography.Title style={{ color: "#0F4C81" }}>
                  {bio_storename}
                </Typography.Title>
              </Row>
              <Row>
                <p style={{ color: "#0F4C81" }}>{bio_description}</p>
              </Row>
            </Col>
            <Col span={6}>
              <img
                src={bio_store_images}
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                alt="store_image"
              />
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default AdjustStoreBio
