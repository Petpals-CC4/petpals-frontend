import React, { Component } from 'react'
import { Table } from 'antd'

const columns = [
    {
        id: 'id',
        customer_name: 'customer_name',
        customer_phone: 'customer_phone'
    }
]
export class OrderListed extends Component {
    state = {
        dataSource: [
            {
                id: 1,
                customer_name: "Ttest TEst",
                customer_phone: "0987654321"
            },
            {
                id: 2,
                customer_name: "Ttest TEst",
                customer_phone: "0987654321"
            },
            {
                id: 3,
                customer_name: "Ttest 3 TEst",
                customer_phone: "0987654321"
            },
        ]
}
    // componentDidMount = async () => {
    //     let result = await Axios.get(`/shopdetail/${this.props.match.params.id}`)
    //     // console.log(result.data)
    //     this.setState({
    //       storeData: result ? result.data : {}
    //     })
    //   }
    render() {
        // const {
        //     Orders,
        // } = this.state
        // console.log(Orders)
        return (
            <div>
                 <div>รายารปัจจุบัน</div>
                 <div>
                 <Table dataSource={this.state.dataSource} columns={columns} />;
                 </div>
                 <div>รายการที่สำเร็จเเล้ว</div>
                 <Table dataSource={this.state.dataSource} columns={columns} />;
            </div>
        )
    }
}
export default OrderListed
