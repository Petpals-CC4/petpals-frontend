import React, { Component } from "react";
import { Col, Row, Card, Typography } from "antd";

// ------------------------image------------------------------

export class StoreBio extends Component {
  render() {
    const { name, description, imageUrl } = this.props;

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
                  {name}
                </Typography.Title>
              </Row>
              <Row>
                <p style={{ color: "#0F4C81" }}>{description}</p>
              </Row>
            </Col>
            <Col span={6}>
              <img
                src={imageUrl}
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

export default StoreBio;
