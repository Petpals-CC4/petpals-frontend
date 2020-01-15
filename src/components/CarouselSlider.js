import React, { Component } from 'react'
import { Row, Col, Carousel, Layout, Card } from 'antd'

export class CarouselSlider extends Component {
  state = {
    data: {
      image_url: [
        "https://img.designswan.com/2018/11/JPGroom/5.jpg",
        "https://img.designswan.com/2018/11/JPGroom/6.jpg",
        "https://img.designswan.com/2018/11/JPGroom/7.jpg",
        "https://img.designswan.com/2018/11/JPGroom/8.jpg"
      ]
    }
  }
  render() {
    return (
      <Layout>
        <Card>
          <Row className="row-carousel">
            <Col >
              <Carousel autoplay>
                {
                  this.state.data.image_url.map(url => (
                    <div className="slide-pet" >
                      <img src={url} style={{ maxWidth: "100%", display: "block", margin: "auto" }}
                      />
                    </div>
                  ))
                }
              </Carousel>
            </Col>
          </Row>
        </Card>
      </Layout>

    )
  }
}

export default CarouselSlider
