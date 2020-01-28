import React, { Component } from 'react'
import StoreBio from '../store-detail/store-info/StoreBio'
import { withRouter } from 'react-router-dom'
import Axios from '../../utils/api.service'
import OrderListed from '../DashboardNanny/OrderListed/OrderListed'

export class DashboardPage extends Component {
    state = {
        storeData: {}
    }

    componentDidMount = async () => {
        let result = await Axios.get(`/shopdetail/${this.props.match.params.id}`)
        // console.log(result.data)
        this.setState({
          storeData: result ? result.data : {}
        })
      }

    render() {
        const {
            storeData,
        } = this.state
        // console.log(storeData)

        return (
            <div>
                <StoreBio 
                  name={storeData.store_name}
                  description={storeData.store_description}
                  imageUrl={storeData.profile_image_url} 
                />
                <OrderListed />
            </div>
        )
    }
}

export default withRouter(DashboardPage)
