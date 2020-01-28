import React, { Component } from 'react'
import axios from 'axios'
import { Card,Col,Row,Typography } from 'antd'


class AdjustStoreBio extends Component {
    state = {
        storeData: []
    };

    
    componentDidMount = async () => {
        let store_id = this.props.match.params.store_id ? this.props.match.params.store_id : this.props.store_id
        console.log(store_id);
        if (!store_id) {
          this.props.history.push("/not_found")
        } else {
          let result = await axios.get(`/shop_detail/${store_id}`)
          console.log(result.data)
          this.setState({
            storeData: result ? result.data : {}
          })
        }
      }

    render() {
        const {
            storeData
        } = this.state;
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
                      {storeData.store_name}
                    </Typography.Title>
                  </Row>
                  <Row>
                    <p style={{ color: "#0F4C81" }}>{storeData.store_description}</p>
                  </Row>
                </Col>
                <Col span={6}>
                  <img
                    src={storeData.store_profile_image_Url}
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
