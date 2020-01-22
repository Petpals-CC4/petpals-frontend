import React, { Component } from 'react'
import { Card } from 'antd'

class CardAbout extends Component {
  render() {
    const {
      // isPictureRight,
      title,
      text,
      imagePath
    } = this.props
    return (
      <Card
        hoverable
        style={{ width: 240, height: "100%" }}
        cover={<img alt="img-detail" src={imagePath} />}
      >
        {/* <Col order={isPictureRight ? 2 : 1}><img src={imagePath} alt="img-detail" height="300px" /></Col>
        <Col order={isPictureRight ? 1 : 2}>
          <Typography.Title level={2}>{title}</Typography.Title>
          <span style={{ fontSize: "1.4em" }}>{text}</span>
        </Col> */}
        <Card.Meta title={title} description={text} />
      </Card>
    )
  }
}

export default CardAbout
