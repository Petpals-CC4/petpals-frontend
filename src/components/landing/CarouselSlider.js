import React, { Component } from 'react'
import { Carousel } from 'antd'

class CarouselSlider extends Component {
  state = {
    // image_url: [
    //   "https://uppicimg.com/file/cOfyZoAH.jpg",
    //   "https://uppicimg.com/file/Mgm1pv3H.jpg",
    //   "https://uppicimg.com/file/1knyTZUD.jpg",
    //   "https://uppicimg.com/file/dWmNUAYK.jpg"
    // ]
  }
  render() {
    const {
      images
    } = this.props
    return (
      <Carousel autoplay>
        {
          images ? images.map(url => (
            <div
              key={url}
              className="setCenterImg"
            >
              <img
                src={url}
                className="carouselImg"
                alt="cover"
              />
            </div>
          ))
          : ""
        }
      </Carousel>
    )
  }
}

export default CarouselSlider
