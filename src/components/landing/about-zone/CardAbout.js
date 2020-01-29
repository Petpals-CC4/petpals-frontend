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
        style={{ maxWidth: 240, height: "100%" }}
        cover={<img alt="img-detail" src={imagePath} />}
      >
        <Card.Meta title={title} description={text} />
      </Card>
    )
  }
}

export default CardAbout
