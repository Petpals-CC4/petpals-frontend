import React, { Component } from 'react'
import Axios from '../../utils/api.service'

class DashboardUser extends Component {
    state = {
        orderLists: [],
        orderActive: [],
        orderHistory: []
      };
    
      getOrderList = async () => {
        try {
          let result = await Axios.get(`/order`);
          console.log(result.data)
          const orderLists = result ? result.data : []
          this.setState({
            orderLists,
            orderActive: orderLists.filter(order => [1, 2].indexOf(order.status_id) >= 0), // waiting_payment and waiting_verify
            orderHistory: orderLists.filter(order => [1, 2].indexOf(order.status_id) < 0),
          });
        } catch (error) {
          message.error("ไม่พบข้อมูล")
          // this.props.history.push("/")
        }
      };
    
      componentDidMount = () => {
        this.getOrderList()
      };
    render() {
        const {
            orderActive,
            orderHistory
          } = this.state;
        return (
            <Row
            type="flex"
            justify="space-between"
            style={{ flexDirection: "column", height: "100%", margin: "5em 2em 2em 2em" }}
          >
            <Col>
              <StoreBio
                name={storeBio.store_name}
                description={storeBio.store_description}
                imageUrl={storeBio.profile_image_url}
              />
            </Col>
            <Col>
              <OrderLists title="รายการปัจจุบัน" data={orderActive} />
            </Col>
            <Col>
              <OrderLists title="รายการปัจจุบัน" data={orderHistory} />
            </Col>
          </Row>
        )
    }
}

export default withRouter(DashboardUser)
