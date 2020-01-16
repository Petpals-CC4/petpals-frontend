import React, { Component } from 'react'
import { Row, Col, Carousel, Layout, Card } from 'antd'

class CarouselSlider extends Component {
  state = {
    data: {
      image_url: [
        "https://uppicimg.com/file/cOfyZoAH.jpg",
        "https://uppicimg.com/file/Mgm1pv3H.jpg",
        "https://uppicimg.com/file/1knyTZUD.jpg",
        "https://uppicimg.com/file/dWmNUAYK.jpg"
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
